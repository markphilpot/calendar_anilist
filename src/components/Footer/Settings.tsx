import { useState, useCallback, useEffect } from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import useSettings from '../../hooks/useSettings';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input.tsx';

const Settings = () => {
  const [open, setOpen] = useState(false);

  const {
    weekStartsSunday,
    setWeekStartsSunday,
    anilistUsername,
    setAnilistUsername,
    showEmptyDays,
    setShowEmptyDays,
    showEnglishTitle,
    setShowEnglishTitle,
    showProgress,
    setShowProgress,
  } = useSettings();

  const [startsSunday, setStartsSunday] = useState(weekStartsSunday ?? true);
  const [username, setUsername] = useState(anilistUsername ?? '');
  const [emptyDays, setEmptyDays] = useState(showEmptyDays ?? true);
  const [showEngTitle, setShowEngTitle] = useState(showEnglishTitle ?? true);
  const [showProg, setShowProg] = useState(showProgress ?? true);

  useEffect(() => {
    setStartsSunday(weekStartsSunday ?? true);
    setUsername(anilistUsername ?? '');
    setEmptyDays(showEmptyDays ?? true);
    setShowEngTitle(showEnglishTitle ?? true);
    setShowProg(showProgress ?? true);
  }, [weekStartsSunday, anilistUsername, showEmptyDays, showEnglishTitle, showProgress]);

  const handleSave = useCallback(() => {
    setWeekStartsSunday(startsSunday);
    setAnilistUsername(username);
    setShowEmptyDays(emptyDays);
    setShowEnglishTitle(showEngTitle);
    setShowProgress(showProg);
    setOpen(false);
  }, [
    startsSunday,
    username,
    emptyDays,
    showEngTitle,
    showProg,
    setWeekStartsSunday,
    setAnilistUsername,
    setShowEmptyDays,
    setShowEnglishTitle,
    setShowProgress,
  ]);

  return (
    <>
      <IoSettingsOutline className={'cursor-pointer'} onClick={() => setOpen(true)} />
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg" showCloseButton={false}>
          <DialogHeader>
            <DialogTitle className="text-center">Weekly Anime Settings</DialogTitle>
          </DialogHeader>

          <div className="mt-2 text-left">
            <div className={'mb-4'}>
              <label htmlFor="anilist-username" className="block text-sm font-medium text-gray-700">
                Anilist Username
              </label>
              <div className="mt-1">
                <Input
                  type="text"
                  name="anilist-username"
                  id="anilist-username"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder=""
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div className="relative mb-4 flex items-start">
              <div className="flex h-5 items-center">
                <input
                  id="start-sunday"
                  aria-describedby="start-sunday-description"
                  name="start-sunday"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  checked={startsSunday}
                  onChange={() => setStartsSunday(!startsSunday)}
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="start-sunday" className="font-medium text-gray-700">
                  Week Starts on Sunday
                </label>
              </div>
            </div>

            <div className="relative mb-4 flex items-start">
              <div className="flex h-5 items-center">
                <input
                  id="show-empty-days"
                  aria-describedby="show-empty-days-description"
                  name="show-empty-days"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  checked={emptyDays}
                  onChange={() => setEmptyDays(!emptyDays)}
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="show-empty-days" className="font-medium text-gray-700">
                  Show Empty Days
                </label>
              </div>
            </div>

            <div className="relative mb-4 flex items-start">
              <div className="flex h-5 items-center">
                <input
                  id="show-english-title"
                  aria-describedby="show-english-title-description"
                  name="show-english-title"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  checked={showEngTitle}
                  onChange={() => setShowEngTitle(!showEngTitle)}
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="show-english-title" className="font-medium text-gray-700">
                  Show English Title
                </label>
              </div>
            </div>

            <div className="relative flex items-start">
              <div className="flex h-5 items-center">
                <input
                  id="show-progress"
                  aria-describedby="show-progress-description"
                  name="show-progress"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  checked={showProg}
                  onChange={() => setShowProg(!showProg)}
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="show-progress" className="font-medium text-gray-700">
                  Show Progress
                </label>
              </div>
            </div>
          </div>

          <DialogFooter className="sm:flex-row-reverse">
            <button
              type="button"
              className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={handleSave}
            >
              Done
            </button>
            <button
              type="button"
              className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Settings;
