import { atom } from 'nanostores';
import { INTRO_CONFIG } from '../constants/portfolio';

const isBrowser = typeof window !== 'undefined';

// State for whether the intro has been marked as "completed" in history
export const introCompleted = atom(false);
// State for whether the intro overlay is currently visible
export const isIntroVisible = atom(true);
// Key to force re-render/reset animations
export const introKey = atom(0);

if (isBrowser) {
    const stored = localStorage.getItem('portfolio_intro_completed') === 'true';
    introCompleted.set(stored);

    // Logic from App.tsx:
    // If intro completed AND skip enabled, start with intro hidden.
    // Otherwise, start with intro visible.
    if (stored && INTRO_CONFIG.enableSkip) {
        isIntroVisible.set(false);
    } else {
        isIntroVisible.set(true);
    }
}

export function setIntroDone() {
    introCompleted.set(true);
    isIntroVisible.set(false);
    if (isBrowser) {
        localStorage.setItem('portfolio_intro_completed', 'true');
    }
}

export function restartIntro() {
    introCompleted.set(false);
    isIntroVisible.set(true);
    introKey.set(introKey.get() + 1);
    if (isBrowser) {
        localStorage.removeItem('portfolio_intro_completed');
    }
}
