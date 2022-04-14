import React from 'react';
import { currentAiringSchedule_Page_mediaList_media } from '../graphql/types/currentAiringSchedule';

import './Day.css';
import Card from './Card';
import { DateTime } from 'luxon';

type Props = {
  day: string;
  cards: currentAiringSchedule_Page_mediaList_media[];
};

const Day = (props: Props) => {
  const { day, cards } = props;

  const dayName = DateTime.fromISO(day).toFormat('cccc');

  return (
    <div className={'Day'}>
      <div className={'dayTitle'}>{dayName}</div>
      {cards.map((m) => {
        return <Card key={m.id} media={m} />;
      })}
    </div>
  );
};

export default Day;
