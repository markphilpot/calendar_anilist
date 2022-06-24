import React from 'react';

import { toPairs } from 'ramda';
import { usersAiringSchedule_Page_mediaList_media } from '../graphql/types/usersAiringSchedule';
import Day from './Day';

type Props = {
  buckets: Record<string, usersAiringSchedule_Page_mediaList_media[]>;
};

const Week = (props: Props) => {
  const { buckets } = props;

  return (
    <div className={'box-border flex w-full flex-shrink-0 flex-grow basis-auto flex-row flex-wrap p-2 xs:flex-nowrap'}>
      {toPairs(buckets).map(([key, list]) => {
        return <Day key={key} day={key} cards={list} />;
      })}
    </div>
  );
};

export default Week;
