import { Component, inject } from '@angular/core';
import { TranslationService } from '../../core/translation.service';
import { RevealOnScrollDirective } from '../../core/reveal-on-scroll.directive';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent {
  protected tr = inject(TranslationService);
}
