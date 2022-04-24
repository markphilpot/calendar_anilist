import React, { useCallback, useRef, useState } from 'react';

import './Footer.css';
import { IoSettingsOutline, IoReloadOutline, IoLogoGithub } from 'react-icons/io5';
import useSettings from '../hooks/useSettings';
import ThemeMenu from './ThemeMenu';

type Props = {
  refresh: () => Promise<unknown>;
};

const Footer = (props: Props) => {
  const { refresh } = props;
  const checkboxRef = useRef(null);
  const usernameRef = useRef(null);

  const { weekStartsSunday, setWeekStartsSunday, anilistUsername, setAnilistUsername } = useSettings();

  const [editSettings, setEditSettings] = useState(false);

  const openSettings = useCallback(() => {
    setEditSettings(true);
  }, []);

  const saveSettings = useCallback(() => {
    // @ts-ignore
    setWeekStartsSunday(checkboxRef.current.checked);
    // @ts-ignore
    setAnilistUsername(usernameRef.current.value);
    setEditSettings(false);
  }, [setAnilistUsername, setWeekStartsSunday]);

  return (
    <div className={'Footer'}>
      <div className={'poweredBy'}>
        Powered by{' '}
        <a href={'https://anilist.co'} target={'_blank'} rel={'noreferrer'}>
          Anilist
        </a>
      </div>
      <div className={'footerButton'}>
        <ThemeMenu />
      </div>
      <IoReloadOutline className={'footerButton'} onClick={refresh} />
      <IoLogoGithub
        className={'footerButton'}
        onClick={() => window.open('https://github.com/markphilpot/calendar_anilist', '_blank')}
      />
      {editSettings ? (
        <div className={'editSettings'}>
          <div className={'form'}>
            <div className={'setting'}>
              <label>
                Week Starts Sunday:
                <input ref={checkboxRef} type={'checkbox'} defaultChecked={weekStartsSunday} />
              </label>
            </div>
            <div className={'setting'}>
              <label>
                Anilist Username:
                <input ref={usernameRef} type={'text'} defaultValue={anilistUsername} />
              </label>
            </div>
          </div>
          <div className={'buttons'}>
            <button onClick={saveSettings}>Save</button>
          </div>
        </div>
      ) : (
        <IoSettingsOutline className={'editSettingsButton'} onClick={openSettings} />
      )}
    </div>
  );
};

export default Footer;
