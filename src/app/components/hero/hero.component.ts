/**
 * COMPONENTE HERO
 * La primera sección visible: foto, nombre, título y botones de acción.
 * Es la "portada" del portafolio.
 */

import { Component, inject } from '@angular/core';
import { TranslationService } from '../../core/translation.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  protected tr = inject(TranslationService);
}
