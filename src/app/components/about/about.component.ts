/**
 * COMPONENTE ABOUT (Sobre mí)
 * Muestra el resumen profesional. Usa la directiva RevealOnScroll
 * para animar la entrada al hacer scroll.
 */

import { Component, inject } from '@angular/core';
import { TranslationService } from '../../core/translation.service';
import { RevealOnScrollDirective } from '../../core/reveal-on-scroll.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealOnScrollDirective],  // Importamos la directiva para poder usarla en el HTML
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  protected tr = inject(TranslationService);
}
