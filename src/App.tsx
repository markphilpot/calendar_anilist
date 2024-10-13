import React, { useCallback, useMemo } from 'react';
import { DateTime } from 'luxon';

import { useQuery } from '@apollo/client';
import { airingSchedule, usersAiringSchedule } from './graphql/airingSchedule';

import '@fontsource/lato';
import '@fontsource/lato/700.css';
import '@fontsource/source-sans-pro/700.css';

import Week from './components/Week';
import Footer from './components/Footer';
import useSettings from './hooks/useSettings';
import { AiringSchedule, MediaSeason } from './gql/graphql';
import { AiringScheduleMedia } from './types';

const getSeason = (): MediaSeason => {
  const month = DateTime.now().month;

  switch (month) {
    case 1:
    case 2:
    case 3:
      return 'WINTER';
    case 4:
    case 5:
    case 6:
      return 'SPRING';
    case 7:
    case 8:
    case 9:
      return 'SUMMER';
    case 10:
    case 11:
    case 12:
      return 'FALL';
  }
};

type Props = {
  clearCache: () => Promise<unknown>;
};

const App = (props: Props) => {
  const { clearCache } = props;

  const { anilistUsername, weekStartsSunday } = useSettings();

  const showUserData = anilistUsername?.length !== 0;

  const {
    data: userData,
    refetch: userDataRefetch,
    loading: userLoading,
  } = useQuery(usersAiringSchedule, {
    fetchPolicy: 'cache-first',
    variables: {
      userName: anilistUsername,
    },
    skip: !showUserData,
    notifyOnNetworkStatusChange: true,
  });

  const {
    data: globalData,
    refetch: globalDataRefetch,
    loading: globalLoading,
  } = useQuery(airingSchedule, {
    fetchPolicy: 'cache-first',
    variables: {
      year: DateTime.now().year,
      season: getSeason(),
    },
    skip: showUserData,
    notifyOnNetworkStatusChange: true,
  });

  const refresh = useCallback(() => {
    return clearCache().then((result) => {
      showUserData ? userDataRefetch() : globalDataRefetch();
    });
  }, [clearCache, globalDataRefetch, showUserData, userDataRefetch]);

  const weekOffests = useMemo(
    () => (weekStartsSunday ? [-1, 0, 1, 2, 3, 4, 5] : [0, 1, 2, 3, 4, 5, 6]),
    [weekStartsSunday]
  );

  const buckets: Record<string, AiringScheduleMedia[]> = useMemo(() => {
    const now = DateTime.now();
    const startOfWeek = now.startOf('week');

    const b: Record<string, AiringScheduleMedia[]> = {
      [startOfWeek.plus({ day: weekOffests[0] }).toISODate()]: [],
      [startOfWeek.plus({ day: weekOffests[1] }).toISODate()]: [],
      [startOfWeek.plus({ day: weekOffests[2] }).toISODate()]: [],
      [startOfWeek.plus({ day: weekOffests[3] }).toISODate()]: [],
      [startOfWeek.plus({ day: weekOffests[4] }).toISODate()]: [],
      [startOfWeek.plus({ day: weekOffests[5] }).toISODate()]: [],
      [startOfWeek.plus({ day: weekOffests[6] }).toISODate()]: [],
    };

    const mediaList = showUserData
      ? (userData?.Page?.mediaList ?? []).map((ml) => ml?.media)
      : globalData?.Page?.media ?? [];

    for (let i = 0; i < mediaList.length; i++) {
      const media = mediaList[i];
      const airingEdges = media?.airingSchedule?.edges ?? [];

      for (let j = 0; j < airingEdges.length; j++) {
        const airingSchedule = airingEdges[j]?.node as AiringSchedule;

        if (airingSchedule != null) {
          const day = DateTime.fromMillis(airingSchedule.airingAt * 1000).toISODate();

          if (day in b && media != null) {
            b[day].push(media);
            break;
          }
        }
      }
    }

    return b;
  }, [userData, globalData, weekOffests, showUserData]);

  return (
    <div
      className={
        'flex min-h-full w-full flex-col bg-white text-black transition-all p-safe dark:bg-[#090909] dark:text-zinc-300'
      }
    >
      <Week buckets={buckets} />
      <Footer refresh={refresh} loading={userLoading || globalLoading} />
    </div>
  );
};

export default App;
