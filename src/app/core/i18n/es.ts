/**
 * DICCIONARIO EN ESPAÑOL
 * ─────────────────────────────────────────────────────────────────
 * Aquí están TODOS los textos de la página en español.
 * Si quieres cambiar algo, solo edita este archivo.
 * El inglés está en el archivo "en.ts" que está al lado de este.
 *
 * La estructura es un objeto normal de TypeScript.
 * Cada "clave" (la palabra antes del :) se usa en los componentes
 * para pedir el texto. Ejemplo: t('nav.about') → "Sobre mí"
 */
export const es = {

  // ── Barra de navegación ──────────────────────────────────────────
  nav: {
    about:      'Sobre mí',
    experience: 'Experiencia',
    education:  'Educación',
    skills:     'Habilidades',
    projects:   'Proyectos',
    contact:    'Contacto',
    downloadCv: 'Descargar CV',
  },

  // ── Sección Hero (la primera pantalla con foto y nombre) ─────────
  hero: {
    greeting:  'Hola, soy',
    name:      'Esteban Cano Estrada',
    title:     'Software Developer',
    subtitle:  'Backend Java · Spring Boot · Microservicios',
    location:  'Medellín, Antioquia, Colombia',
    cta:       'Ver mi trabajo',
    download:  'Descargar CV',
  },

  // ── Sección "Sobre mí" ───────────────────────────────────────────
  about: {
    sectionTitle: 'Sobre mí',
    body: `Estudiante de quinto semestre de Tecnología en Sistematización de Datos
en el Politécnico Colombiano Jaime Isaza Cadavid, con sólida formación en
desarrollo backend con Java y Spring Boot. Experiencia práctica en aplicaciones
empresariales, arquitecturas MVC, REST y microservicios, incluyendo enfoques
reactivos con Spring WebFlux. Interés en diseño limpio de software, arquitecturas
escalables y buenas prácticas de ingeniería.`,
  },

  // ── Sección Experiencia ──────────────────────────────────────────
  experience: {
    sectionTitle: 'Experiencia',
    job1: {
      title:    'Software Developer',
      company:  'Atlético Nacional S.A',
      location: 'Guarne, Antioquia',
      period:   'Marzo 2025 – Presente',
      bullets: [
        'Soporte en el área de sistemas y participación activa como desarrollador backend.',
        'Lideré la implementación de software personalizado para gestionar el ingreso de personal administrativo al estadio.',
        'Desarrollo de aplicaciones con Spring Boot, Spring Security y Thymeleaf bajo arquitectura MVC.',
        'Diseño e implementación de APIs REST documentadas con Swagger/OpenAPI.',
        'Implementación de autenticación y autorización con JWT (access + refresh tokens) y Spring Security con roles y permisos granulares.',
        'Desarrollo de solución escalable con arquitectura de monolito modular para garantizar separación de responsabilidades.',
        'Consumo del backend desde un frontend desarrollado en React.',
        'Implementación de persistencia con Hibernate/JPA, Flyway para migraciones y PostgreSQL como motor de base de datos.',
        'Configuración de CI/CD con GitHub Actions y despliegue en Azure Cloud.',
      ],
    },
  },

  // ── Sección Educación ────────────────────────────────────────────
  education: {
    sectionTitle: 'Educación',
    school1: {
      institution: 'Politécnico Colombiano Jaime Isaza Cadavid',
      degree:      'Tecnología en Sistematización de Datos',
      location:    'Medellín, Antioquia',
      period:      'Junio 2023 – Presente',
      highlight:   'Mejor proyecto backend de cuarto y quinto semestre.',
    },
  },

  // ── Sección Habilidades ──────────────────────────────────────────
  skills: {
    sectionTitle: 'Habilidades',
    categories: {
      backend:       'Backend',
      databases:     'Bases de datos',
      architecture:  'Arquitectura',
      devops:        'DevOps y Herramientas',
      frontend:      'Frontend',
      languages:     'Idiomas',
      soft:          'Habilidades blandas',
    },
  },

  // ── Sección Proyectos ────────────────────────────────────────────
  projects: {
    sectionTitle: 'Proyectos',
    viewCode:     'Ver código',
    noLink:       'Repositorio privado',
    proj1: {
      title:       'Control de Acceso – Atlético Nacional',
      description: 'Software personalizado para gestionar el ingreso de personal administrativo al estadio Atanasio Girardot. Implementado con Spring Boot, Spring Security (autenticación y autorización), Thymeleaf para las vistas MVC, Hibernate/JPA + Flyway para persistencia y migraciones, y despliegue en Azure con CI/CD vía GitHub Actions.',
      tech:        ['Spring Boot', 'Spring Security', 'Thymeleaf', 'Hibernate/JPA', 'Flyway', 'GitHub Actions', 'Azure'],
    },
    proj2: {
      title:       'Jobsi – Backend con Arquitectura Hexagonal',
      description: 'Proyecto académico para aprender y aplicar Arquitectura Limpia / Hexagonal con Spring Boot. Separa la lógica de negocio de la infraestructura manteniendo un núcleo desacoplado. Incluye APIs REST documentadas con Swagger/OpenAPI, pruebas unitarias con JUnit 5 y Mockito, y soporte de Docker para despliegue.',
      tech:        ['Spring Boot', 'Clean/Hexagonal Architecture', 'Spring Data JPA', 'MySQL', 'Swagger/OpenAPI', 'JUnit 5', 'Mockito', 'Docker'],
    },
    proj3: {
      title:       'Jobsi – Microservicios Reactivos',
      description: 'Proyecto académico en curso para practicar microservicios reactivos con Spring WebFlux y Arquitectura Limpia / Hexagonal. Implementa programación reactiva con Project Reactor (Mono/Flux), persistencia reactiva con R2DBC, descubrimiento de servicios con Netflix Eureka y orquestación con Docker Compose.',
      tech:        ['Spring WebFlux', 'Project Reactor', 'R2DBC', 'Clean/Hexagonal Architecture', 'Netflix Eureka', 'Docker Compose', 'MySQL'],
    },
    inProgress: 'En curso',
  },

  // ── Sección Contacto ─────────────────────────────────────────────
  contact: {
    sectionTitle: 'Contacto',
    subtitle:     '¿Tienes una oportunidad o proyecto? ¡Hablemos!',
    email:        'Correo electrónico',
    phone:        'Teléfono',
    linkedin:     'LinkedIn',
    github:       'GitHub',
  },

  // ── Footer ───────────────────────────────────────────────────────
  footer: {
    rights:  'Todos los derechos reservados.',
    madeWith:'Hecho con',
    and:     'y Angular',
  },
};

// Exportamos el tipo para que TypeScript nos ayude a no equivocarnos de claves
export type Translations = typeof es;
