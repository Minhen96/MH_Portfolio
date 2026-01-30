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

    // Normal navigation: Check session storage
    // If the user simply refreshes (F5), session storage persists, so we skip intro if already done.
    // If they close the tab (Hard Session Reset), session storage is cleared, so intro plays.
    const stored = sessionStorage.getItem('portfolio_intro_completed') === 'true';
    introCompleted.set(stored);

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
        sessionStorage.setItem('portfolio_intro_completed', 'true');
    }
}

export function restartIntro() {
    console.log("Restarting Intro sequence...");
    introCompleted.set(false);
    isIntroVisible.set(true);
    introKey.set(introKey.get() + 1);
    if (isBrowser) {
        sessionStorage.removeItem('portfolio_intro_completed');
    }
}
