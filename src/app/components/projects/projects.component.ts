/**
 * COMPONENTE PROJECTS (Proyectos)
 *
 * Para agregar un proyecto nuevo:
 * 1. Añade los textos en src/app/core/i18n/es.ts y en.ts (proj4, proj5...)
 * 2. Añade la entrada en el array 'projects' de este componente
 * 3. Vuelve a correr ng serve — aparecerá automáticamente
 */

import { Component, inject } from '@angular/core';
import { TranslationService } from '../../core/translation.service';
import { RevealOnScrollDirective } from '../../core/reveal-on-scroll.directive';

interface Project {
  titleKey:   string;
  descKey:    string;
  techKey:    string;
  github?:    string;   // URL del repositorio (undefined = privado)
  live?:      string;   // URL de demo en vivo (opcional)
  featured?:  boolean;  // Muestra el badge de estrella
  inProgress?: boolean; // Muestra el badge "En curso"
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  protected tr = inject(TranslationService);

  protected projects: Project[] = [
    {
      titleKey:   'projects.proj1.title',
      descKey:    'projects.proj1.description',
      techKey:    'projects.proj1.tech',
      github:     undefined,
      featured:   true,
    },
    {
      titleKey:   'projects.proj2.title',
      descKey:    'projects.proj2.description',
      techKey:    'projects.proj2.tech',
      github:     'https://github.com/Jobsi-PPI/Jobsi_Backend_Project',
      featured:   true,
    },
    {
      titleKey:    'projects.proj3.title',
      descKey:     'projects.proj3.description',
      techKey:     'projects.proj3.tech',
      github:      'https://github.com/caes2004/jobsi-webflux-msvcs',
      inProgress:  true,
    },
  ];

  getTechItems(techKey: string): string[] {
    return this.tr.tArray(techKey);
  }
}
