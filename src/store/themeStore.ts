import { atom } from 'nanostores';

const isBrowser = typeof window !== 'undefined';
// Default to dark mode (true) if no preference found, matching ThemeProvider logic
const initialTheme = isBrowser ? (localStorage.getItem('theme-mode') === 'light' ? false : true) : true;

export const isDark = atom(initialTheme);

export function toggleTheme() {
    const next = !isDark.get();
    isDark.set(next);
    if (isBrowser) {
        localStorage.setItem('theme-mode', next ? 'dark' : 'light');
        if (next) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }
}

// Initialize class on load (runs when module imported)
if (isBrowser) {
    if (initialTheme) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}
