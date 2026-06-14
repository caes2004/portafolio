# Portafolio Personal — Esteban Cano Estrada

Sitio web personal tipo CV/portafolio construido con **Angular 19**, desplegado en **Vercel**.

---

## Tabla de contenidos

1. [Requisitos previos](#requisitos-previos)
2. [Cómo correr el proyecto](#cómo-correr-el-proyecto)
3. [Estructura del proyecto explicada](#estructura-del-proyecto-explicada)
4. [Conceptos clave de Angular usados](#conceptos-clave-de-angular-usados)
5. [Cómo editar los textos](#cómo-editar-los-textos)
6. [Cómo añadir un proyecto nuevo](#cómo-añadir-un-proyecto-nuevo)
7. [Despliegue en Vercel (paso a paso)](#despliegue-en-vercel-paso-a-paso)

---

## Requisitos previos

- **Node.js** v18 o superior → https://nodejs.org
- **Angular CLI** → se instala con: `npm install -g @angular/cli@19`
- Una cuenta gratuita en **GitHub** y una en **Vercel**

---

## Cómo correr el proyecto

```bash
# 1. Entrar a la carpeta del proyecto
cd portfolio

# 2. Instalar dependencias (solo la primera vez)
npm install

# 3. Iniciar el servidor de desarrollo
ng serve
```

Luego abre tu navegador en `http://localhost:4200`. La página se recarga automáticamente cada vez que guardas un archivo.

---

## Estructura del proyecto explicada

```
portfolio/
├── src/
│   ├── assets/                          <- Archivos estáticos (foto, PDF)
│   │   ├── me.jpeg
│   │   └── Esteban_Cano_Estrada-Resume.pdf
│   │
│   ├── styles.css                       <- Estilos GLOBALES + paleta de colores
│   ├── index.html                       <- El HTML base de la página
│   ├── main.ts                          <- Punto de entrada de Angular
│   │
│   └── app/
│       ├── app.component.ts/.html/.css  <- Componente RAÍZ (arma el layout)
│       ├── app.config.ts                <- Configuración de la app
│       │
│       ├── core/                        <- Lógica compartida (servicios + directiva)
│       │   ├── i18n/
│       │   │   ├── es.ts               <- Todos los textos en ESPAÑOL <- edita aquí
│       │   │   └── en.ts               <- Todos los textos en INGLÉS  <- edita aquí
│       │   ├── translation.service.ts   <- Servicio de idioma
│       │   ├── theme.service.ts         <- Servicio de tema claro/oscuro
│       │   └── reveal-on-scroll.directive.ts  <- Animación al hacer scroll
│       │
│       └── components/                  <- Un componente por sección
│           ├── header/
│           ├── hero/
│           ├── about/
│           ├── experience/
│           ├── education/
│           ├── skills/
│           ├── projects/
│           ├── contact/
│           └── footer/
│
├── vercel.json                          <- Configuración del despliegue en Vercel
└── README.md                            <- Este archivo
```

---

## Conceptos clave de Angular usados

### 1. Componente standalone (`@Component`)

Cada sección de la página es un componente. Un componente tiene 3 partes:

```typescript
@Component({
  selector: 'app-hero',        // El tag HTML: <app-hero />
  standalone: true,            // No necesita NgModule (Angular moderno)
  templateUrl: './hero.component.html',  // La plantilla (lo que se ve)
  styleUrl: './hero.component.css',      // Los estilos (solo para este componente)
  imports: [],                 // Lo que el HTML de este componente necesita
})
export class HeroComponent { ... }
```

Equivalente en backend: una clase Controller + su vista (template).

---

### 2. Signals (`signal()` y `computed()`)

Un signal es una variable reactiva. Cuando cambia, Angular actualiza la pantalla automáticamente.

```typescript
// Crear un signal
const contador = signal(0);

// Leer su valor — siempre con ()
console.log(contador());  // 0

// Actualizar su valor
contador.set(5);
contador.update(v => v + 1);  // recibe el valor anterior

// Computed: signal derivado (de solo lectura)
const doble = computed(() => contador() * 2);
```

---

### 3. Inyección de dependencias (`inject()`)

Equivalente a `@Autowired` en Spring Boot:

```typescript
// Forma moderna (Angular 17+)
private tr = inject(TranslationService);
```

---

### 4. Binding en el HTML

| Sintaxis           | Nombre           | Qué hace                               |
|--------------------|------------------|----------------------------------------|
| `{{ valor }}`      | Interpolación    | Muestra texto dinámico                 |
| `[propiedad]`      | Property binding | Asigna valor a una propiedad del DOM   |
| `(evento)`         | Event binding    | Escucha un evento (click, change, ...) |
| `[class.x]="b"`   | Class binding    | Añade clase CSS si b es true           |

---

### 5. Control de flujo (`@if`, `@for`)

```html
@if (condicion) {
  <p>Visible si true</p>
} @else {
  <p>Visible si false</p>
}

@for (item of lista; track item.id) {
  <li>{{ item.nombre }}</li>
}
```

---

### 6. Servicios (`@Injectable`)

```typescript
@Injectable({ providedIn: 'root' })  // Singleton para toda la app
export class MiServicio {
  // Lógica compartida entre componentes
}
```

---

### 7. Directivas de atributo

Añaden comportamiento a un elemento HTML sin cambiar su estructura:

```html
<section appRevealOnScroll>
  <!-- Se anima al aparecer en pantalla -->
</section>
```

---

## Cómo editar los textos

**Todos los textos están en dos archivos:**

- `src/app/core/i18n/es.ts` — textos en español
- `src/app/core/i18n/en.ts` — textos en inglés

Ejemplo — cambiar el subtítulo del hero:

```typescript
// En es.ts
hero: {
  subtitle: 'Backend Java · Spring Boot · Microservicios',  // <- cambia esto
}

// En en.ts
hero: {
  subtitle: 'Backend Java · Spring Boot · Microservices',   // <- y esto también
}
```

---

## Cómo añadir un proyecto nuevo

### Paso 1 — Agregar los textos en los diccionarios

En `src/app/core/i18n/es.ts`, dentro de `projects`, añade:

```typescript
proj3: {
  title:       'Nombre de tu proyecto',
  description: 'Descripción del proyecto.',
  tech:        ['Java', 'Spring Boot', 'MySQL'],
},
```

Haz lo mismo en `en.ts` con la traducción al inglés.
Actualiza también el tipo `Translations` si TypeScript lo requiere.

### Paso 2 — Registrar en el componente

En `src/app/components/projects/projects.component.ts`, añade al array `projects`:

```typescript
{
  titleKey: 'projects.proj3.title',
  descKey:  'projects.proj3.description',
  techKey:  'projects.proj3.tech',
  github:   'https://github.com/caes2004/nombre-repo',  // undefined si es privado
},
```

¡Listo! La tarjeta aparecerá automáticamente.

---

## Cómo cambiar tu foto

Reemplaza `src/assets/me.jpeg` con tu nueva foto (mismo nombre).
O cambia el nombre y actualiza `src/app/components/hero/hero.component.html`:

```html
<img src="assets/tu-nueva-foto.jpg" alt="..." />
```

---

## Despliegue en Vercel (paso a paso)

### Paso 1 — Crear el repositorio en GitHub

1. Ve a https://github.com/new
2. Crea un repositorio nuevo (p. ej. `portfolio`)
3. En tu terminal, dentro de la carpeta `portfolio/`:

```bash
git init
git add .
git commit -m "Primer commit: portafolio Angular"
git branch -M main
git remote add origin https://github.com/caes2004/portfolio.git
git push -u origin main
```

### Paso 2 — Conectar con Vercel

1. Ve a https://vercel.com y crea una cuenta gratuita (usa tu GitHub)
2. Haz clic en **"Add New Project"**
3. Selecciona el repositorio `portfolio`
4. Vercel detectará que es Angular automáticamente
5. Verifica la configuración:
   - **Framework Preset:** Angular
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist/portfolio/browser`
6. Haz clic en **"Deploy"**

### Paso 3 — Tu página está en vivo

En ~2 minutos tendrás una URL pública:
`https://portfolio-caes2004.vercel.app` (o similar)

### Actualizar la página después de cambios

```bash
git add .
git commit -m "Descripción de los cambios"
git push
```

Vercel redesplegará automáticamente. Sin pasos adicionales.

---

## Comandos útiles

| Comando                          | Qué hace                                           |
|----------------------------------|----------------------------------------------------|
| `ng serve`                       | Inicia el servidor de desarrollo en localhost:4200 |
| `ng build`                       | Compila el proyecto para producción                |
| `ng generate component nombre`   | Crea un nuevo componente                           |
| `npm run build`                  | Alias de ng build (el que usa Vercel)              |

---

## Paleta de colores

Los colores están en `src/styles.css` como variables CSS.
Para cambiarlos edita los valores en `[data-theme="light"]`:

```css
--verde-principal: #2e7d57;  /* <- el verde principal */
--verde-medio:     #3fa776;  /* <- acento más claro   */
```

---

*Construido con Angular 19 · Desplegado en Vercel · Por Esteban Cano Estrada*
