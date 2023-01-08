import React, { useMemo } from 'react';

import { toPairs } from 'ramda';
import { usersAiringSchedule_Page_mediaList_media } from '../graphql/types/usersAiringSchedule';
import Day from './Day';
import useSettings from '../hooks/useSettings';

type Props = {
  buckets: Record<string, usersAiringSchedule_Page_mediaList_media[]>;
};

const Week = (props: Props) => {
  const { buckets } = props;

  const { showEmptyDays } = useSettings();

  const pairs = useMemo(() => {
    return toPairs(buckets).filter(([key, list]) => {
      return showEmptyDays || list.length > 0;
    });
  }, [buckets, showEmptyDays]);

  const scaleCards = pairs.length < 7;

  return (
    <div className={'box-border flex w-full flex-shrink-0 flex-grow basis-auto flex-row flex-wrap p-2 xs:flex-nowrap'}>
      {pairs.map(([key, list]) => {
        return <Day key={key} day={key} cards={list} scaleCards={scaleCards} />;
      })}
    </div>
  );
};

export default Week;
