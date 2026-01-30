import { atom } from 'nanostores';

const isBrowser = typeof window !== 'undefined';

// State for whether the intro has been marked as "completed" in history
export const introCompleted = atom(false);
// State for whether the intro overlay is currently visible
export const isIntroVisible = atom(true);
// Key to force re-render/reset animations
export const introKey = atom(0);

export function initIntro(enableSkip: boolean) {
    if (!isBrowser) return;

    const stored = localStorage.getItem('portfolio_intro_completed') === 'true';
    introCompleted.set(stored);

    // Logic:
    // If intro completed AND skip enabled, start with intro hidden.
    // Otherwise, start with intro visible.
    if (stored && enableSkip) {
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
    console.log("Restarting Intro sequence...");
    introCompleted.set(false);
    isIntroVisible.set(true);
    introKey.set(introKey.get() + 1);
    if (isBrowser) {
        localStorage.removeItem('portfolio_intro_completed');
    }
}
