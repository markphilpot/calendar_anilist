import React from 'react';

import './Week.css';
import { toPairs } from 'ramda';
import { currentAiringSchedule_Page_mediaList_media } from '../graphql/types/currentAiringSchedule';
import Day from './Day';

type Props = {
  buckets: Record<string, currentAiringSchedule_Page_mediaList_media[]>;
};

const Week = (props: Props) => {
  const { buckets } = props;

  return (
    <div className={'Week'}>
      {toPairs(buckets).map(([key, list]) => {
        return <Day key={key} day={key} cards={list} />;
      })}
    </div>
  );
};

export default Week;
