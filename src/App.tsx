import React, { useMemo } from 'react';
import { DateTime } from 'luxon';

import './App.css';
import useManageTheme from './hooks/useManageTheme';
import { useQuery } from '@apollo/client';
import { currentAringSchedule } from './graphql/airingSchedule';
import {
  currentAiringSchedule as currentAiringScheduleData,
  currentAiringSchedule_Page_mediaList,
  currentAiringSchedule_Page_mediaList_media,
  currentAiringSchedule_Page_mediaList_media_airingSchedule_edges_node,
  currentAiringScheduleVariables,
} from './graphql/types/currentAiringSchedule';

import '@fontsource/lato';
import '@fontsource/lato/700.css';
import '@fontsource/source-sans-pro/700.css';

import Week from './components/Week';
import Footer from './components/Footer';
import useSettings from './hooks/useSettings';

function App() {
  const { theme } = useManageTheme();

  const { anilistUsername, weekStartsSunday } = useSettings();

  const { data } = useQuery<currentAiringScheduleData, currentAiringScheduleVariables>(currentAringSchedule, {
    variables: {
      userName: anilistUsername ?? 'mphilpot',
    },
  });

  const weekOffests = useMemo(
    () => (weekStartsSunday ? [-1, 0, 1, 2, 3, 4, 5] : [0, 1, 2, 3, 4, 5, 6]),
    [weekStartsSunday]
  );

  const buckets: Record<string, currentAiringSchedule_Page_mediaList_media[]> = useMemo(() => {
    const now = DateTime.now();
    const startOfWeek = now.startOf('week');

    const b: Record<string, currentAiringSchedule_Page_mediaList_media[]> = {
      [startOfWeek.plus({ day: weekOffests[0] }).toISODate()]: [],
      [startOfWeek.plus({ day: weekOffests[1] }).toISODate()]: [],
      [startOfWeek.plus({ day: weekOffests[2] }).toISODate()]: [],
      [startOfWeek.plus({ day: weekOffests[3] }).toISODate()]: [],
      [startOfWeek.plus({ day: weekOffests[4] }).toISODate()]: [],
      [startOfWeek.plus({ day: weekOffests[5] }).toISODate()]: [],
      [startOfWeek.plus({ day: weekOffests[6] }).toISODate()]: [],
    };

    const mediaList = data?.Page?.mediaList ?? [];

    for (let i = 0; i < mediaList.length; i++) {
      const mediaListEntry = mediaList[i] as currentAiringSchedule_Page_mediaList;
      const airingEdges = mediaListEntry.media?.airingSchedule?.edges ?? [];

      for (let j = 0; j < airingEdges.length; j++) {
        const airingSchedule = airingEdges[j]
          ?.node as currentAiringSchedule_Page_mediaList_media_airingSchedule_edges_node;

        if (airingSchedule != null) {
          const day = DateTime.fromMillis(airingSchedule.airingAt * 1000).toISODate();

          if (day in b && mediaListEntry.media != null) {
            b[day].push(mediaListEntry.media);
          }
        }
      }
    }

    return b;
  }, [data, weekOffests]);

  return (
    <div className="App" data-theme={theme}>
      <Week buckets={buckets} />
      <Footer />
    </div>
  );
}

export default App;
