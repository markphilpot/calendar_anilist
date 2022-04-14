import { useCallback, useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';

type SettingsType = {
  weekStartsSunday: boolean;
  anilistUsername: string;
};

const useSettings = () => {
  const [weekStartsSunday, setWeekStartsSunday] = useLocalStorage('weekStartsSunday', true);
  const [anilistUsername, setAnilistUsername] = useLocalStorage('anilistUsername', '');

  // We need this to keep track when other hook instances change localStorage
  // @ts-ignore Pesky undefined
  const [settingsState, setSettingState] = useState<SettingsType>({ weekStartsSunday, anilistUsername });

  const handleWeekStartsSunday = useCallback(
    (value: boolean) => {
      setWeekStartsSunday(value);

      // Need to notify this context
      window.dispatchEvent(
        new CustomEvent('settingsChange', { detail: { settings: { ...settingsState, weekStartsSunday: value } } })
      );
    },
    [setWeekStartsSunday, settingsState]
  );

  const handleAnilistUsername = useCallback(
    (value: string) => {
      setAnilistUsername(value);

      // Need to notify this context
      window.dispatchEvent(
        new CustomEvent('settingsChange', { detail: { settings: { ...settingsState, anilistUsername: value } } })
      );
    },
    [setAnilistUsername, settingsState]
  );

  useEffect(() => {
    const checkSettingsData = (event: CustomEvent<{ settings: SettingsType }>) => {
      const { settings } = event.detail;
      setSettingState(settings);
    };

    // @ts-ignore CustomEvent
    window.addEventListener('settingsChange', checkSettingsData);

    return () => {
      // @ts-ignore CustomEvent
      window.removeEventListener('settingsChange', checkSettingsData);
    };
  }, []);

  return {
    ...settingsState,
    setWeekStartsSunday: handleWeekStartsSunday,
    setAnilistUsername: handleAnilistUsername,
  };
};

export default useSettings;
