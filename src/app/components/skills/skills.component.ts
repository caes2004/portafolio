/**
 * COMPONENTE SKILLS (Habilidades)
 *
 * Aquí definimos los datos de habilidades directamente en el componente.
 * Los títulos de categoría SÍ vienen del diccionario (para soportar i18n).
 *
 * Para añadir una habilidad: agrega el string al array items de la categoría.
 * Para añadir una categoría: añade una entrada aquí, su traducción en es.ts y en.ts,
 * y su ícono SVG en skills.component.html.
 */

import { Component, inject } from '@angular/core';
import { TranslationService } from '../../core/translation.service';
import { RevealOnScrollDirective } from '../../core/reveal-on-scroll.directive';

/** Estructura de una categoría de habilidades */
interface SkillCategory {
  key:      string;   // Clave para buscar el título en el diccionario i18n
  iconType: string;   // Identificador del ícono SVG (ver el HTML para los iconos disponibles)
  items:    string[]; // Lista de tecnologías/habilidades
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  protected tr = inject(TranslationService);

  protected categories: SkillCategory[] = [
    {
      key:      'skills.categories.backend',
      iconType: 'backend',
      items: ['Java', 'Spring Boot', 'Spring WebFlux', 'Spring Security', 'JWT / Refresh Tokens', 'Hibernate / JPA', 'Flyway', 'RESTful APIs', 'Swagger / OpenAPI'],
    },
    {
      key:      'skills.categories.databases',
      iconType: 'database',
      items: ['PostgreSQL', 'MySQL', 'Oracle Database', 'R2DBC'],
    },
    {
      key:      'skills.categories.architecture',
      iconType: 'architecture',
      items: ['Monolito Modular', 'Microservicios', 'Spring Cloud (Eureka)', 'API Gateway', 'Arquitectura Hexagonal / Clean'],
    },
    {
      key:      'skills.categories.devops',
      iconType: 'devops',
      items: ['Git', 'GitHub', 'GitHub Actions', 'Docker', 'Docker Compose', 'Maven', 'Postman', 'Azure'],
    },
    {
      key:      'skills.categories.frontend',
      iconType: 'frontend',
      items: ['React', 'HTML5', 'Bootstrap', 'Thymeleaf'],
    },
    {
      key:      'skills.categories.languages',
      iconType: 'languages',
      items: ['Español (Nativo)', 'English (B1)'],
    },
    {
      key:      'skills.categories.soft',
      iconType: 'soft',
      items: ['Comunicación', 'Escucha activa', 'Pensamiento crítico', 'Trabajo en equipo', 'Gestión del tiempo', 'Resolución de problemas', 'Adaptabilidad'],
    },
  ];
}
