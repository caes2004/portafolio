/**
 * COMPONENTE EXPERIENCE (Experiencia)
 * Muestra la tarjeta de trabajo en Atlético Nacional.
 *
 * Nota sobre tArray():
 * El servicio de traducción tiene dos métodos:
 *   t('clave')      → retorna un string
 *   tArray('clave') → retorna un array de strings (para los bullets)
 */

import { Component, inject } from '@angular/core';
import { TranslationService } from '../../core/translation.service';
import { RevealOnScrollDirective } from '../../core/reveal-on-scroll.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  protected tr = inject(TranslationService);
}
