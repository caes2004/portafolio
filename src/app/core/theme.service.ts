/**
 * SERVICIO DE TEMA (CLARO / OSCURO)
 * ════════════════════════════════════════════════════════════════════
 *
 * Este servicio controla el modo claro/oscuro de la app.
 *
 * CÓMO FUNCIONA EL TEMA:
 * En el archivo styles.css definimos variables CSS para cada tema:
 *   [data-theme="light"] { --bg: #ffffff; --text: #1a1a1a; ... }
 *   [data-theme="dark"]  { --bg: #0f1713; --text: #e8f0eb; ... }
 *
 * Aquí simplemente cambiamos el atributo data-theme en el <body> del HTML.
 * Con eso, el navegador aplica automáticamente las variables CSS correctas
 * y toda la página cambia de color. ¡Sin tocar ningún componente!
 *
 * La preferencia se guarda en localStorage para que persista al refrescar.
 * ════════════════════════════════════════════════════════════════════
 */

import { Injectable, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'portfolio-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {

  /**
   * Determinamos el tema inicial con esta prioridad:
   * 1. Lo que el usuario guardó antes (localStorage)
   * 2. La preferencia del sistema operativo (prefers-color-scheme)
   * 3. Por defecto: 'light'
   */
  private _theme = signal<Theme>(this._getInitialTheme());

  /** Signal público de solo lectura para que los componentes sepan el tema actual */
  readonly theme = this._theme.asReadonly();

  constructor() {
    // Al iniciar, aplicamos el tema guardado en el DOM
    this._applyTheme(this._theme());
  }

  /** Alterna entre claro y oscuro */
  toggleTheme(): void {
    const next: Theme = this._theme() === 'light' ? 'dark' : 'light';
    this._theme.set(next);
    this._applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  }

  /** Retorna true si el tema actual es oscuro (útil para mostrar el ícono correcto) */
  isDark(): boolean {
    return this._theme() === 'dark';
  }

  /** Lee el tema guardado o detecta la preferencia del sistema */
  private _getInitialTheme(): Theme {
    const saved = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (saved === 'light' || saved === 'dark') return saved;

    // window.matchMedia detecta si el SO del usuario prefiere modo oscuro
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }

  /**
   * Aplica el tema al <body> del documento.
   * Con data-theme en el body, las reglas CSS [data-theme="dark"] se activan.
   */
  private _applyTheme(theme: Theme): void {
    document.body.setAttribute('data-theme', theme);
  }
}
