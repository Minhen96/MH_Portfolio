import { useEffect } from 'preact/hooks';
import { useStore } from '@nanostores/preact';
import { isIntroVisible, introKey, initIntro, restartIntro } from '../store/introStore';
import IntroScreen from './IntroScreen';

interface IntroControllerProps {
  personal: {
    name: string;
    title: string;
  };
  intro: {
    greeting: string;
    tagline: string;
    skipText: string;
    enableSkip: boolean;
  };
}

export default function IntroController({ personal, intro }: IntroControllerProps) {
  const $visible = useStore(isIntroVisible);
  const $key = useStore(introKey);

  useEffect(() => {
    initIntro(intro.enableSkip);

    const handleRestartEvent = () => {
      console.log("🔄 Received 'portfolio:restart-intro' event in Controller");
      restartIntro();
    };

    window.addEventListener('portfolio:restart-intro', handleRestartEvent);
    return () => window.removeEventListener('portfolio:restart-intro', handleRestartEvent);
  }, [intro.enableSkip]);

  // Manage body scroll and global animation state
  useEffect(() => {
    if ($visible) {
      document.body.classList.add('overflow-hidden', 'animations-paused', 'intro-active');
    } else {
      document.body.classList.remove('overflow-hidden', 'animations-paused', 'intro-active');
    }
    
    return () => {
      document.body.classList.remove('overflow-hidden', 'animations-paused', 'intro-active');
    };
  }, [$visible]);

  if (!$visible) return null;

  return <IntroScreen key={$key} personal={personal} intro={intro} />;
}
