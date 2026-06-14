/**
 * ENGLISH DICTIONARY
 * ─────────────────────────────────────────────────────────────────
 * All page texts in English.
 * The structure must EXACTLY mirror es.ts — same keys, different values.
 * If you add a key in es.ts, add it here too.
 */
import { Translations } from './es';

export const en: Translations = {

  nav: {
    about:      'About',
    experience: 'Experience',
    education:  'Education',
    skills:     'Skills',
    projects:   'Projects',
    contact:    'Contact',
    downloadCv: 'Download CV',
  },

  hero: {
    greeting:  'Hi, I\'m',
    name:      'Esteban Cano Estrada',
    title:     'Software Developer',
    subtitle:  'Backend Java · Spring Boot · Microservices',
    location:  'Medellín, Antioquia, Colombia',
    cta:       'See my work',
    download:  'Download CV',
  },

  about: {
    sectionTitle: 'About Me',
    body: `Fifth semester student of Data Systematization Technology at the Jaime Isaza Cadavid
Polytechnic, with solid training in backend development with Java and Spring Boot.
Hands-on experience in enterprise applications, MVC architectures, REST, and microservices,
including Spring WebFlux reactive approaches. Interest in clean software design,
scalable architectures and good engineering practices.`,
  },

  experience: {
    sectionTitle: 'Experience',
    job1: {
      title:    'Software Developer',
      company:  'Atlético Nacional S.A',
      location: 'Guarne, Antioquia',
      period:   'March 2025 – Present',
      bullets: [
        'Support in the systems area and active participation as a backend developer.',
        'Led the implementation of customized software to manage the entry of administrative personnel to the stadium.',
        'Application development using Spring Boot, Spring Security and Thymeleaf under MVC architecture.',
        'Design and implementation of REST APIs documented with Swagger/OpenAPI.',
        'Authentication and authorization with JWT (access + refresh tokens) and Spring Security with granular roles and permissions.',
        'Scalable solution development using a modular monolith architecture to ensure separation of concerns.',
        'Backend consumption from a React frontend.',
        'Persistence with Hibernate/JPA, Flyway for migrations, and PostgreSQL as the database engine.',
        'CI/CD configuration with GitHub Actions and deployment to Azure Cloud.',
      ],
    },
  },

  education: {
    sectionTitle: 'Education',
    school1: {
      institution: 'Politécnico Colombiano Jaime Isaza Cadavid',
      degree:      'Data Systematization Technology',
      location:    'Medellín, Antioquia',
      period:      'June 2023 – Present',
      highlight:   'Best fourth and fifth semester backend project.',
    },
  },

  skills: {
    sectionTitle: 'Skills',
    categories: {
      backend:       'Backend',
      databases:     'Databases',
      architecture:  'Architecture',
      devops:        'DevOps & Tools',
      frontend:      'Frontend',
      languages:     'Languages',
      soft:          'Soft Skills',
    },
  },

  projects: {
    sectionTitle: 'Projects',
    viewCode:     'View code',
    noLink:       'Private repository',
    proj1: {
      title:       'Access Control – Atlético Nacional',
      description: 'Custom software to manage administrative staff entry to the Atanasio Girardot stadium. Built with Spring Boot, Spring Security (authentication and authorization), Thymeleaf for MVC views, Hibernate/JPA + Flyway for persistence and migrations, and deployment on Azure with CI/CD via GitHub Actions.',
      tech:        ['Spring Boot', 'Spring Security', 'Thymeleaf', 'Hibernate/JPA', 'Flyway', 'GitHub Actions', 'Azure'],
    },
    proj2: {
      title:       'Jobsi – Backend with Hexagonal Architecture',
      description: 'Academic project to learn and apply Clean / Hexagonal Architecture with Spring Boot. Separates business logic from infrastructure while maintaining a decoupled core. Includes REST APIs documented with Swagger/OpenAPI, unit tests with JUnit 5 and Mockito, and Docker support.',
      tech:        ['Spring Boot', 'Clean/Hexagonal Architecture', 'Spring Data JPA', 'MySQL', 'Swagger/OpenAPI', 'JUnit 5', 'Mockito', 'Docker'],
    },
    proj3: {
      title:       'Jobsi – Reactive Microservices',
      description: 'Ongoing academic project to practice reactive microservices with Spring WebFlux and Clean / Hexagonal Architecture. Implements reactive programming with Project Reactor (Mono/Flux), reactive persistence with R2DBC, service discovery with Netflix Eureka, and orchestration with Docker Compose.',
      tech:        ['Spring WebFlux', 'Project Reactor', 'R2DBC', 'Clean/Hexagonal Architecture', 'Netflix Eureka', 'Docker Compose', 'MySQL'],
    },
    inProgress: 'In progress',
  },

  contact: {
    sectionTitle: 'Contact',
    subtitle:     'Have an opportunity or project? Let\'s talk!',
    email:        'Email',
    phone:        'Phone',
    linkedin:     'LinkedIn',
    github:       'GitHub',
  },

  footer: {
    rights:  'All rights reserved.',
    madeWith:'Made with',
    and:     'and Angular',
  },
};
