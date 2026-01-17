import { useCallback, useMemo } from 'react';
import { DateTime } from 'luxon';

import Week from './components/Week';
import Footer from './components/Footer/Footer';
import useSettings from './hooks/useSettings';
import { useUsersAiringSchedule, useAiringSchedule } from './hooks/useAiringSchedule';
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
    isLoading: userLoading,
    isFetching: userFetching,
  } = useUsersAiringSchedule({ userName: anilistUsername }, { enabled: showUserData });

  const {
    data: globalData,
    refetch: globalDataRefetch,
    isLoading: globalLoading,
    isFetching: globalFetching,
  } = useAiringSchedule(
    {
      year: DateTime.now().year,
      season: getSeason(),
    },
    { enabled: !showUserData }
  );

  const refresh = useCallback(async () => {
    await clearCache();
    if (showUserData) {
      await userDataRefetch();
    } else {
      await globalDataRefetch();
    }
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
      : (globalData?.Page?.media ?? []);

    for (let i = 0; i < mediaList.length; i++) {
      const media = mediaList[i];
      const airingEdges = media?.airingSchedule?.edges ?? [];

      for (let j = 0; j < airingEdges.length; j++) {
        const airingSchedule = airingEdges[j]?.node as AiringSchedule;

        if (airingSchedule != null) {
          const day = DateTime.fromMillis(airingSchedule.airingAt * 1000).toISODate();

          if (day && day in b && media != null) {
            b[day].push(media);
            break;
          }
        }
      }
    }

    return b;
  }, [userData, globalData, weekOffests, showUserData]);

  const progressMap: Record<string, number | null> = useMemo(() => {
    if (!showUserData) return {};

    const result: Record<string, number | null> = {};
    for (const item of userData?.Page?.mediaList ?? []) {
      if (item?.media?.id) {
        result[item.media.id] = item.progress ?? null;
      }
    }
    return result;
  }, [showUserData, userData]);

  const loading = userLoading || globalLoading || userFetching || globalFetching;

  return (
    <div
      className={
        'flex min-h-full w-full flex-col bg-white text-black transition-all p-safe dark:bg-[#090909] dark:text-zinc-300 font-nebula'
      }
    >
      <Week buckets={buckets} progress={progressMap} />
      <Footer refresh={refresh} loading={loading} />
    </div>
  );
};

export default App;
