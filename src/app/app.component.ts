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
      this.applyDocMeta();
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
    this.applyDocMeta();
  }

  setLang(lang: string): void {
    this.currentLang = lang;
    localStorage.setItem('nodra_lang', lang);
    this.applyDocMeta();
  }

  private applyDocMeta(): void {
    if (typeof document === 'undefined') return;
    if (this.currentLang === 'es') {
      document.documentElement.lang = 'es';
      document.title = 'NODRA Network | Señal humana para la era de la IA';
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute('content', 'NODRA explora sistemas de validación humana, experiencia confiable y herramientas colaborativas para un mundo cada vez más influido por la inteligencia artificial.');
    } else {
      document.documentElement.lang = 'en';
      document.title = 'NODRA Network | Human Signal for the AI Era';
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute('content', 'NODRA explores human validation, trusted experience and community-driven tools for a world increasingly shaped by artificial intelligence.');
    }
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
