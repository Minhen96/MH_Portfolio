import { useEffect } from 'preact/hooks';
import { useStore } from '@nanostores/preact';
import { isIntroVisible, introKey, initIntro } from '../store/introStore';
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
  }, [intro.enableSkip]);

  if (!$visible) return null;

  return <IntroScreen key={$key} personal={personal} intro={intro} />;
}
