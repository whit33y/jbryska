import { Injectable, signal, effect, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly THEME_KEY = 'theme';
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  theme = signal<'light' | 'dark'>('dark');

  constructor() {
    if (this.isBrowser) {
      const saved = localStorage.getItem(this.THEME_KEY) as 'light' | 'dark' | null;
      if (saved) this.theme.set(saved);
      this.applyTheme(this.theme());
    }

    effect(() => {
      const current = this.theme();
      if (this.isBrowser) {
        localStorage.setItem(this.THEME_KEY, current);
        this.applyTheme(current);
      }
    });
  }

  toggleTheme() {
    this.theme.set(this.theme() === 'dark' ? 'light' : 'dark');
  }

  private applyTheme(theme: 'light' | 'dark') {
    if (!this.isBrowser) return;
    const html = document.documentElement;
    html.classList.toggle('dark', theme === 'dark');
    html.classList.toggle('light', theme === 'light');
  }
}
