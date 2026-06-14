/**
 * APP COMPONENT — Componente Raíz
 * ════════════════════════════════════════════════════════════════════
 *
 * Este es el componente raíz de la aplicación. Angular lo busca por
 * su selector 'app-root' en el index.html y lo renderiza allí.
 *
 * Su única responsabilidad es importar y armar todos los componentes
 * de la página en orden. No tiene lógica propia.
 *
 * IMPORTANTE — imports en @Component:
 * En Angular standalone, cada componente declara en 'imports' todo lo
 * que su PLANTILLA (HTML) necesita usar. Es como las importaciones de
 * Java pero a nivel de template.
 * ════════════════════════════════════════════════════════════════════
 */

import { Component, inject } from '@angular/core';
import { ThemeService } from './core/theme.service';

// Importamos cada componente que usaremos en la plantilla
import { HeaderComponent }    from './components/header/header.component';
import { HeroComponent }      from './components/hero/hero.component';
import { AboutComponent }     from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent }    from './components/skills/skills.component';
import { ProjectsComponent }  from './components/projects/projects.component';
import { ContactComponent }   from './components/contact/contact.component';
import { FooterComponent }    from './components/footer/footer.component';
import { ScrollUiComponent }  from './components/scroll-ui/scroll-ui.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    ScrollUiComponent,   // barra de progreso + botón volver arriba
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  /**
   * Inyectamos ThemeService en el componente raíz para que el tema
   * se inicialice tan pronto como la app arranca.
   * El constructor del servicio llama a _applyTheme() automáticamente.
   */
  private themeService = inject(ThemeService);
}
