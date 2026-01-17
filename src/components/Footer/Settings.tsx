import { useState, useCallback } from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import useSettings from '../../hooks/useSettings';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Checkbox } from '@/components/ui/checkbox.tsx';
import { Label } from '@/components/ui/label.tsx';

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
              <Label htmlFor="anilist-username">Anilist Username</Label>
              <div className="mt-1">
                <Input
                  type="text"
                  name="anilist-username"
                  id="anilist-username"
                  placeholder=""
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div className="relative mb-4 flex items-start">
              <div className="flex items-center">
                <Checkbox
                  id="start-sunday"
                  aria-describedby="start-sunday-description"
                  name="start-sunday"
                  checked={startsSunday}
                  onCheckedChange={() => {
                    setStartsSunday(!startsSunday);
                  }}
                />
              </div>
              <div className="ml-3">
                <Label htmlFor="start-sunday">Week Starts on Sunday</Label>
              </div>
            </div>

            <div className="relative mb-4 flex items-start">
              <div className="flex items-center">
                <Checkbox
                  id="show-empty-days"
                  aria-describedby="show-empty-days-description"
                  name="show-empty-days"
                  checked={emptyDays}
                  onCheckedChange={() => setEmptyDays(!emptyDays)}
                />
              </div>
              <div className="ml-3">
                <Label htmlFor="show-empty-days">Show Empty Days</Label>
              </div>
            </div>

            <div className="relative mb-4 flex items-start">
              <div className="flex items-center">
                <Checkbox
                  id="show-english-title"
                  aria-describedby="show-english-title-description"
                  name="show-english-title"
                  checked={showEngTitle}
                  onCheckedChange={() => setShowEngTitle(!showEngTitle)}
                />
              </div>
              <div className="ml-3">
                <Label htmlFor="show-english-title">Show English Title</Label>
              </div>
            </div>

            <div className="relative flex items-start">
              <div className="flex items-center">
                <Checkbox
                  id="show-progress"
                  aria-describedby="show-progress-description"
                  name="show-progress"
                  checked={showProg}
                  onCheckedChange={() => setShowProg(!showProg)}
                />
              </div>
              <div className="ml-3">
                <Label htmlFor="show-progress">Show Progress</Label>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button onClick={handleSave}>Done</Button>
            <Button variant={'secondary'} onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Settings;
