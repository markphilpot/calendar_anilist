import React, { useCallback, useMemo } from 'react';
import { DateTime } from 'luxon';

import './App.css';
import { useQuery } from '@apollo/client';
import { airingSchedule, usersAiringSchedule } from './graphql/airingSchedule';
import {
  usersAiringSchedule as usersAiringScheduleData,
  usersAiringSchedule_Page_mediaList_media,
  usersAiringSchedule_Page_mediaList_media_airingSchedule_edges_node,
  usersAiringScheduleVariables,
} from './graphql/types/usersAiringSchedule';

import '@fontsource/lato';
import '@fontsource/lato/700.css';
import '@fontsource/source-sans-pro/700.css';

import Week from './components/Week';
import Footer from './components/Footer';
import useSettings from './hooks/useSettings';
import { airingSchedule as airingScheduleData, airingScheduleVariables } from './graphql/types/airingSchedule';
import { MediaSeason } from './graphql/types/globalTypes';
import { useTheme } from './context/theme';

const getSeason = (): MediaSeason => {
  const month = DateTime.now().month;

  switch (month) {
    case 1:
    case 2:
    case 3:
      return MediaSeason.WINTER;
    case 4:
    case 5:
    case 6:
      return MediaSeason.SPRING;
    case 7:
    case 8:
    case 9:
      return MediaSeason.SUMMER;
    case 10:
    case 11:
    case 12:
      return MediaSeason.FALL;
  }
};

type Props = {
  clearCache: () => Promise<unknown>;
};

const App = (props: Props) => {
  const { clearCache } = props;
  const theme = useTheme();

  const { anilistUsername, weekStartsSunday } = useSettings();

  const showUserData = anilistUsername?.length !== 0;

  const { data: userData, refetch: userDataRefetch } = useQuery<usersAiringScheduleData, usersAiringScheduleVariables>(
    usersAiringSchedule,
    {
      fetchPolicy: 'cache-first',
      variables: {
        userName: anilistUsername,
      },
      skip: !showUserData,
    }
  );

  const { data: globalData, refetch: globalDataRefetch } = useQuery<airingScheduleData, airingScheduleVariables>(
    airingSchedule,
    {
      fetchPolicy: 'cache-first',
      variables: {
        year: DateTime.now().year,
        season: getSeason(),
      },
      skip: showUserData,
    }
  );

  const refresh = useCallback(() => {
    return clearCache().then((result) => {
      showUserData ? userDataRefetch() : globalDataRefetch();
    });
  }, [clearCache, globalDataRefetch, showUserData, userDataRefetch]);

  const weekOffests = useMemo(
    () => (weekStartsSunday ? [-1, 0, 1, 2, 3, 4, 5] : [0, 1, 2, 3, 4, 5, 6]),
    [weekStartsSunday]
  );

  const buckets: Record<string, usersAiringSchedule_Page_mediaList_media[]> = useMemo(() => {
    const now = DateTime.now();
    const startOfWeek = now.startOf('week');

    const b: Record<string, usersAiringSchedule_Page_mediaList_media[]> = {
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
        const airingSchedule = airingEdges[j]
          ?.node as usersAiringSchedule_Page_mediaList_media_airingSchedule_edges_node;

        if (airingSchedule != null) {
          const day = DateTime.fromMillis(airingSchedule.airingAt * 1000).toISODate();

          if (day in b && media != null) {
            b[day].push(media);
          }
        }
      }
    }

    return b;
  }, [userData, globalData, weekOffests, showUserData]);

  return (
    <div className="App" data-theme={theme}>
      <Week buckets={buckets} />
      <Footer refresh={refresh} />
    </div>
  );
};

export default App;
