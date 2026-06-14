/**
 * SCROLL UI COMPONENT
 * ════════════════════════════════════════════════════════════════════
 * Este componente aporta dos mejoras de experiencia de usuario (UX):
 *
 * 1. BARRA DE PROGRESO — una línea verde de 3px en la parte superior
 *    de la ventana que crece de 0 % a 100 % al hacer scroll.
 *
 * 2. BOTÓN "VOLVER ARRIBA" — un botón circular verde, flotante en la
 *    esquina inferior derecha, que aparece cuando el usuario bajó más
 *    de 400 px y permite volver al inicio con animación suave.
 *
 * ──── CONCEPTOS ANGULAR NUEVOS EN ESTE ARCHIVO ────────────────────
 *
 * @HostListener
 *   Permite que el componente escuche eventos globales del navegador
 *   (como el scroll de la ventana) de forma declarativa.
 *   Angular registra el listener al crear el componente y lo limpia
 *   automáticamente al destruirlo — sin addEventListener/removeEventListener.
 *
 * signal<T>
 *   Estado reactivo: cuando se llama a .set(), Angular actualiza
 *   automáticamente solo los fragmentos del DOM que dependen de ese signal.
 *   Es mucho más eficiente que detectar cambios en todo el componente.
 *
 * [style.width.%]
 *   Property binding con unidad integrada.
 *   [style.width.%]="progress()" → aplica width: 47% (por ejemplo).
 *   Angular concatena el valor del signal con la unidad '%'.
 *
 * @if (signal())
 *   Control flow condicional: añade o elimina el elemento del DOM
 *   según el valor del signal (true = renderiza, false = elimina).
 * ════════════════════════════════════════════════════════════════════
 */

import { Component, signal, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-ui',
  standalone: true,
  imports: [],                           // sin dependencias externas
  templateUrl: './scroll-ui.component.html',
  styleUrl: './scroll-ui.component.css',
})
export class ScrollUiComponent {

  /**
   * signal<number> — porcentaje de scroll de 0 a 100.
   * La barra de progreso usa su valor: [style.width.%]="progress()"
   */
  protected progress = signal<number>(0);

  /**
   * signal<boolean> — controla la visibilidad del botón volver arriba.
   * true  → el usuario bajó más de 400 px, mostrar botón.
   * false → estamos cerca del inicio, ocultar botón.
   */
  protected showBackToTop = signal<boolean>(false);

  /**
   * @HostListener('window:scroll')
   * ─────────────────────────────────────────────────────────────────
   * Este decorador le dice a Angular:
   *   "cuando la ventana emita el evento 'scroll', ejecuta este método".
   *
   * Equivalente en JavaScript puro:
   *   window.addEventListener('scroll', () => { this.onScroll(); });
   *
   * La ventaja: Angular gestiona el ciclo de vida. Si el componente
   * se destruye, el listener se elimina sin ningún esfuerzo extra.
   * ─────────────────────────────────────────────────────────────────
   */
  @HostListener('window:scroll')
  protected onScroll(): void {
    // scrollY es la cantidad de píxeles que la ventana bajó
    const scrollTop    = window.scrollY || document.documentElement.scrollTop;

    // scrollHeight = altura total de la página (incluyendo lo oculto)
    const scrollHeight = document.documentElement.scrollHeight;

    // clientHeight = altura visible de la ventana
    const clientHeight = document.documentElement.clientHeight;

    // Máximo scroll posible = total - visible
    const maxScroll = scrollHeight - clientHeight;

    // Porcentaje: cuánto del scroll total ya recorrió el usuario (0-100)
    const pct = maxScroll > 0 ? Math.round((scrollTop / maxScroll) * 100) : 0;

    // .set() actualiza el signal → Angular re-renderiza SOLO lo afectado
    this.progress.set(pct);
    this.showBackToTop.set(scrollTop > 400);
  }

  /**
   * Desplaza la ventana suavemente al inicio.
   * 'smooth' activa la animación nativa de scroll del navegador.
   */
  protected scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
