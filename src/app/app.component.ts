import { Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nodra';
  currentLang = 'en';

  @HostBinding('class') get hostClass() {
    return 'lang-' + this.currentLang;
  }

  constructor() {
    this.initLanguage();
  }

  private initLanguage(): void {
    const saved = localStorage.getItem('nodra_lang');
    if (saved === 'en' || saved === 'es') {
      this.currentLang = saved;
      return;
    }
    const langs: string[] = navigator.languages
      ? Array.from(navigator.languages)
      : [navigator.language || 'en'];
    const isSpanish = langs.some(l => {
      const lower = l.toLowerCase();
      return lower === 'es' || lower.startsWith('es-');
    });
    this.currentLang = isSpanish ? 'es' : 'en';
  }

  setLang(lang: string): void {
    this.currentLang = lang;
    localStorage.setItem('nodra_lang', lang);
  }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  openLink(url: string) {
    if (url && url !== '#') {
      window.open(url, '_blank');
    }
  }
}
