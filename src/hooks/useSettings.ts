import { useCallback, useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';

const useSettings = () => {
  const [weekStartsSunday, setWeekStartsSunday] = useLocalStorage('weekStartsSunday', true);
  const [anilistUsername, setAnilistUsername] = useLocalStorage('anilistUsername', '');

  // We need this to keep track when other hook instances change localStorage
  const [dayStart, setDayStart] = useState(weekStartsSunday);
  const [username, setUsername] = useState(anilistUsername);

  const handleWeekStartsSunday = useCallback(
    (value: boolean) => {
      setWeekStartsSunday(value);

      // Need to notify this context
      window.dispatchEvent(new CustomEvent('settingsChange.dayStart', { detail: { dayStart: value } }));
    },
    [setWeekStartsSunday]
  );

  const handleAnilistUsername = useCallback(
    (value: string) => {
      setAnilistUsername(value);

      // Need to notify this context
      window.dispatchEvent(new CustomEvent('settingsChange.username', { detail: { username: value } }));
    },
    [setAnilistUsername]
  );

  useEffect(() => {
    const captureDayStart = (event: CustomEvent<{ dayStart: boolean }>) => {
      const { dayStart } = event.detail;
      setDayStart(dayStart);
    };
    const captureUsername = (event: CustomEvent<{ username: string }>) => {
      const { username } = event.detail;
      setUsername(username);
    };

    // @ts-ignore CustomEvent
    window.addEventListener('settingsChange.dayStart', captureDayStart);
    // @ts-ignore CustomEvent
    window.addEventListener('settingsChange.username', captureUsername);

    return () => {
      // @ts-ignore CustomEvent
      window.removeEventListener('settingsChange.dayStart', captureDayStart);
      // @ts-ignore CustomEvent
      window.removeEventListener('settingsChange.username', captureUsername);
    };
  }, []);

  return {
    weekStartsSunday: dayStart,
    anilistUsername: username,
    setWeekStartsSunday: handleWeekStartsSunday,
    setAnilistUsername: handleAnilistUsername,
  };
};

export default useSettings;
