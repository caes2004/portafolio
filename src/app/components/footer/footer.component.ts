import { Component, inject } from '@angular/core';
import { TranslationService } from '../../core/translation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  protected tr = inject(TranslationService);
  protected year = new Date().getFullYear();
}
