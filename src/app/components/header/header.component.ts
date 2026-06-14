/**
 * COMPONENTE HEADER
 * ════════════════════════════════════════════════════════════════════
 *
 * ¿QUÉ ES UN COMPONENTE EN ANGULAR?
 * Un componente es el bloque básico de construcción de Angular.
 * Tiene 3 partes:
 *  1. La lógica (este archivo .ts — TypeScript)
 *  2. La plantilla (el .html — lo que se muestra en pantalla)
 *  3. Los estilos (el .css — solo afecta a este componente)
 *
 * Es similar a un "widget" o "View" en otros frameworks.
 * En Java, sería como una clase controladora + su vista.
 *
 * @Component — El decorador que define el componente:
 *   - selector:    El nombre del tag HTML para usar este componente (<app-header>)
 *   - standalone:  true = no necesita NgModule (forma moderna de Angular 17+)
 *   - templateUrl: Ruta al archivo HTML de la plantilla
 *   - styleUrl:    Ruta al archivo CSS del componente
 *   - imports:     Lista de lo que el TEMPLATE de este componente necesita
 * ════════════════════════════════════════════════════════════════════
 */

import { Component, inject, signal, HostListener } from '@angular/core';
import { TranslationService } from '../../core/translation.service';
import { ThemeService } from '../../core/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {

  /**
   * inject() — Inyección de dependencias moderna en Angular 17+.
   * Es equivalente a @Autowired en Spring Boot.
   * Le pedimos a Angular que nos entregue la instancia de estos servicios.
   */
  protected tr = inject(TranslationService);
  protected theme = inject(ThemeService);

  /** Signal local: true si el menú mobile está abierto */
  protected menuOpen = signal(false);

  /** Signal local: true si el usuario hizo scroll (para el estilo del header) */
  protected scrolled = signal(false);

  /**
   * @HostListener — escucha eventos del navegador en el componente.
   * Aquí escuchamos el scroll de la ventana para cambiar el fondo del header.
   */
  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 60);
  }

  /** Navega a una sección con scroll suave y cierra el menú mobile */
  scrollTo(sectionId: string): void {
    const el = document.getElementById(sectionId);
    el?.scrollIntoView({ behavior: 'smooth' });
    this.menuOpen.set(false);
  }

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }
}
