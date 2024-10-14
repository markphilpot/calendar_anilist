import { useCallback, useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';

const useSettings = () => {
  const [weekStartsSunday, setWeekStartsSunday] = useLocalStorage('weekStartsSunday', true);
  const [anilistUsername, setAnilistUsername] = useLocalStorage('anilistUsername', '');
  const [showEmptyDays, setShowEmptyDays] = useLocalStorage('showEmptyDays', true);
  const [showEnglishTitle, setShowEnglishTitle] = useLocalStorage('showEnglishTitle', true);
  const [showProgress, setShowProgress] = useLocalStorage('showProgress', true);

  // We need this to keep track when other hook instances change localStorage
  const [dayStart, setDayStart] = useState(weekStartsSunday);
  const [username, setUsername] = useState(anilistUsername);
  const [emptyDays, setEmptyDays] = useState(showEmptyDays);
  const [showEngTitle, setShowEngTitle] = useState(showEnglishTitle);
  const [progress, setProgress] = useState(showProgress);

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

  const handleShowEmptyDays = useCallback(
    (value: boolean) => {
      setShowEmptyDays(value);

      // Need to notify this context
      window.dispatchEvent(new CustomEvent('settingsChange.showEmptyDays', { detail: { showEmptyDays: value } }));
    },
    [setShowEmptyDays]
  );

  const handleShowEnglishTitle = useCallback(
    (value: boolean) => {
      setShowEnglishTitle(value);

      // Need to notify this context
      window.dispatchEvent(new CustomEvent('settingsChange.showEnglishTitle', { detail: { showEnglishTitle: value } }));
    },
    [setShowEnglishTitle]
  );

  const handleShowProgress = useCallback(
    (value: boolean) => {
      setShowProgress(value);

      // Need to notify this context
      window.dispatchEvent(new CustomEvent('settingsChange.showProgress', { detail: { showProgress: value } }));
    },
    [setShowProgress]
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
    const captureEmptyDays = (event: CustomEvent<{ showEmptyDays: boolean }>) => {
      const { showEmptyDays } = event.detail;
      setEmptyDays(showEmptyDays);
    };
    const captureShowEnglishTitle = (event: CustomEvent<{ showEnglishTitle: boolean }>) => {
      const { showEnglishTitle } = event.detail;
      setShowEngTitle(showEnglishTitle);
    };
    const captureShowProgress = (event: CustomEvent<{ showProgress: boolean }>) => {
      const { showProgress } = event.detail;
      setProgress(showProgress);
    };

    // @ts-ignore CustomEvent
    window.addEventListener('settingsChange.dayStart', captureDayStart);
    // @ts-ignore CustomEvent
    window.addEventListener('settingsChange.username', captureUsername);
    // @ts-ignore CustomEvent
    window.addEventListener('settingsChange.showEmptyDays', captureEmptyDays);
    // @ts-ignore CustomEvent
    window.addEventListener('settingsChange.showEnglishTitle', captureShowEnglishTitle);
    // @ts-ignore CustomEvent
    window.addEventListener('settingsChange.showProgress', captureShowProgress);

    return () => {
      // @ts-ignore CustomEvent
      window.removeEventListener('settingsChange.dayStart', captureDayStart);
      // @ts-ignore CustomEvent
      window.removeEventListener('settingsChange.username', captureUsername);
      // @ts-ignore CustomEvent
      window.removeEventListener('settingsChange.showEmptyDays', captureEmptyDays);
      // @ts-ignore CustomEvent
      window.removeEventListener('settingsChange.showEnglishTitle', captureShowEnglishTitle);
      // @ts-ignore CustomEvent
      window.removeEventListener('settingsChange.showProgress', captureShowProgress);
    };
  }, []);

  return {
    weekStartsSunday: dayStart,
    anilistUsername: username,
    showEmptyDays: emptyDays,
    showEnglishTitle: showEngTitle,
    showProgress: progress,
    setWeekStartsSunday: handleWeekStartsSunday,
    setAnilistUsername: handleAnilistUsername,
    setShowEmptyDays: handleShowEmptyDays,
    setShowEnglishTitle: handleShowEnglishTitle,
    setShowProgress: handleShowProgress,
  };
};

export default useSettings;
