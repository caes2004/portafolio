import { Component, inject } from '@angular/core';
import { TranslationService } from '../../core/translation.service';
import { RevealOnScrollDirective } from '../../core/reveal-on-scroll.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  protected tr = inject(TranslationService);

  /** Datos de contacto — edítalos aquí si cambian */
  protected contactItems = [
    {
      icon: 'email',
      label: 'contact.email',
      value: 'esteban.estra@hotmail.com',
      href: 'mailto:esteban.estra@hotmail.com',
    },
    {
      icon: 'linkedin',
      label: 'contact.linkedin',
      value: 'linkedin.com/in/esteban-cano-estrada',
      href: 'https://www.linkedin.com/in/esteban-cano-estrada',
    },
    {
      icon: 'github',
      label: 'contact.github',
      value: 'github.com/caes2004',
      href: 'https://github.com/caes2004',
    },
  ];
}
