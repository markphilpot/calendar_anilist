import React from 'react';

import Card from './Card';
import { DateTime } from 'luxon';
import classNames from 'classnames';
import { AiringScheduleMedia } from '../types';

type Props = {
  day: string;
  cards: AiringScheduleMedia[];
  progress: Record<string, number | null>;
  scaleCards: boolean;
};

const Day = (props: Props) => {
  const { day, cards, progress, scaleCards } = props;

  const dayName = DateTime.fromISO(day).toFormat('cccc');

  const isToday = dayName === DateTime.now().toFormat('cccc');

  return (
    <div className="box-border flex min-h-25 grow basis-auto cursor-pointer flex-col sm:basis-0">
      <div
        className={classNames(
          'sticky top-0 z-10 border-b border-black bg-white p-1 text-center font-nebula font-bold',
          'dark:border-zinc-400 dark:bg-[#090909] dark:text-white',
          'px-6',
          'sm:static',
          {
            'bg-fuchsia-100 dark:bg-fuchsia-950': isToday,
          }
        )}
      >
        {dayName}
      </div>
      {cards.map((m) => {
        return <Card key={m.id} media={m} progress={progress[m.id]} scaleCard={scaleCards} />;
      })}
    </div>
  );
};

export default Day;
