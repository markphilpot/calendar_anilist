import React from 'react';
import { usersAiringSchedule_Page_mediaList_media } from '../graphql/types/usersAiringSchedule';

import Card from './Card';
import { DateTime } from 'luxon';
import classNames from 'classnames';

type Props = {
  day: string;
  cards: usersAiringSchedule_Page_mediaList_media[];
};

const Day = (props: Props) => {
  const { day, cards } = props;

  const dayName = DateTime.fromISO(day).toFormat('cccc');

  return (
    <div
      className={classNames(
        'box-border flex min-h-[100px] w-full flex-shrink flex-grow basis-auto cursor-pointer flex-col',
        'border-black dark:border-white',
        'border border-r border-t',
        'xs:basis-0 xs:border-r-0 xs:border-t',
        'first:rounded-tl first:rounded-tr',
        'xs:first:rounded-bl xs:first:rounded-tl xs:first:rounded-tr-none',
        'last:rounded-br last:rounded-bl',
        'xs:last:rounded-br xs:last:rounded-tr xs:last:rounded-bl-none last:border-r'
      )}
    >
      <div className={'border-b border-black p-1 text-center font-ssp font-bold dark:border-white'}>{dayName}</div>
      {cards.map((m) => {
        return <Card key={m.id} media={m} />;
      })}
    </div>
  );
};

export default Day;
