import { useStore } from '@nanostores/preact';
import { isIntroVisible, introKey } from '../store/introStore';
import IntroScreen from './IntroScreen';

export default function IntroController() {
  const $visible = useStore(isIntroVisible);
  const $key = useStore(introKey);

  if (!$visible) return null;

  return <IntroScreen key={$key} />;
}
