import React, { useMemo } from 'react';

import { toPairs } from 'ramda';
import classNames from 'classnames';
import Day from './Day';
import useSettings from '../hooks/useSettings';
import { AiringScheduleMedia } from '../types';

type Props = {
  buckets: Record<string, AiringScheduleMedia[]>;
  progress: Record<string, number | null>;
};

const Week = (props: Props) => {
  const { buckets, progress } = props;

  const { showEmptyDays } = useSettings();

  const pairs = useMemo(() => {
    return toPairs(buckets).filter(([, list]) => {
      return showEmptyDays || list.length > 0;
    });
  }, [buckets, showEmptyDays]);

  const scaleCards = pairs.length < 7;

  return (
    <div className="box-border w-full shrink-0 grow basis-auto p-2">
      <div
        className={classNames(
          'flex w-full flex-col overflow-clip rounded border border-black divide-y divide-black',
          'dark:border-zinc-400 dark:divide-zinc-400',
          'sm:flex-row sm:divide-x sm:divide-y-0'
        )}
      >
        {pairs.map(([key, list]) => {
          return <Day key={key} day={key} cards={list} progress={progress} scaleCards={scaleCards} />;
        })}
      </div>
    </div>
  );
};

export default Week;
