/**
 * DIRECTIVA revealOnScroll
 * ════════════════════════════════════════════════════════════════════
 *
 * ¿QUÉ ES UNA DIRECTIVA EN ANGULAR?
 * Una directiva es como un "superpoder" que le añades a un elemento HTML.
 * En Java/Spring no hay un equivalente directo; lo más parecido sería un
 * Aspect (AOP) que añade comportamiento sin cambiar el código del componente.
 *
 * Hay 3 tipos:
 *  - Directivas de componente: los propios componentes (@Component)
 *  - Directivas de atributo: modifican el elemento donde se aplican (este caso)
 *  - Directivas estructurales: cambian el DOM (@if, @for)
 *
 * USO EN EL HTML:
 *   <section appRevealOnScroll>...</section>
 *
 * CÓMO FUNCIONA:
 * Usa IntersectionObserver, una API del navegador que nos avisa cuando un
 * elemento entra en el viewport (la parte visible de la pantalla).
 * Cuando el elemento aparece, le añade la clase CSS 'revealed' que activa
 * la animación definida en styles.css.
 * ════════════════════════════════════════════════════════════════════
 */

import {
  Directive,
  ElementRef,    // Referencia al elemento DOM donde se aplica la directiva
  OnInit,        // Ciclo de vida: se ejecuta al iniciar el componente
  OnDestroy,     // Ciclo de vida: se ejecuta al destruir el componente
  inject,        // Función para inyectar dependencias (forma moderna en Angular 17+)
} from '@angular/core';

// @Directive le dice a Angular que esta clase es una directiva.
// selector: '[appRevealOnScroll]' → se activa cuando escribes appRevealOnScroll en el HTML
@Directive({
  selector: '[appRevealOnScroll]',
  standalone: true,  // Componente standalone: no necesita declararse en ningún NgModule
})
export class RevealOnScrollDirective implements OnInit, OnDestroy {

  // inject() es la forma moderna de inyectar dependencias en Angular 17+
  // ElementRef nos da acceso al elemento HTML real del DOM
  private el = inject(ElementRef<HTMLElement>);

  // Guardamos referencia al observer para poder desconectarlo al destruir
  private observer: IntersectionObserver | null = null;

  ngOnInit(): void {
    // Estado inicial: el elemento está oculto (la clase 'reveal-hidden' lo hace)
    this.el.nativeElement.classList.add('reveal-hidden');

    // IntersectionObserver llama al callback cuando el elemento entra/sale del viewport
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // El elemento ya es visible: añadimos 'revealed' para la animación
            this.el.nativeElement.classList.add('revealed');
            this.el.nativeElement.classList.remove('reveal-hidden');
            // Dejamos de observar: la animación solo ocurre una vez
            this.observer?.unobserve(this.el.nativeElement);
          }
        });
      },
      {
        threshold: 0.1,  // Dispara cuando al menos el 10% del elemento es visible
        rootMargin: '0px 0px -50px 0px',  // Activa 50px antes de llegar al fondo
      }
    );

    this.observer.observe(this.el.nativeElement);
  }

  // ngOnDestroy: limpieza importante para evitar memory leaks
  // (igual que cerrar un stream en Java)
  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
