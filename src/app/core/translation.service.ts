/**
 * SERVICIO DE TRADUCCIONES
 * ════════════════════════════════════════════════════════════════════
 *
 * ¿QUÉ ES UN "SERVICIO" EN ANGULAR?
 * Un servicio es una clase normal que contiene lógica que varios
 * componentes pueden compartir. Aquí guardamos el idioma actual
 * y la función para traducir textos. En vez de que cada componente
 * tenga sus propios textos, todos le "piden" a este servicio.
 *
 * ¿QUÉ ES @Injectable?
 * Es un decorador (como una anotación de Java) que le dice a Angular:
 * "esta clase puede ser inyectada (entregada automáticamente) a quien
 * la necesite". Con providedIn: 'root', Angular crea UNA SOLA instancia
 * para toda la app (patrón Singleton — igual que en Spring con @Service).
 *
 * ¿QUÉ ES UN signal()?
 * Un signal es una variable "reactiva": cuando cambia, Angular actualiza
 * automáticamente la pantalla sin que tengas que llamar a ninguna función.
 * Es similar al concepto de Observable en RxJS pero más simple.
 * En Angular 17+ los signals son la forma moderna y recomendada de manejar
 * estado local.
 * ════════════════════════════════════════════════════════════════════
 */

// "Injectable" es el decorador; "signal" y "computed" son de @angular/core
import { Injectable, signal, computed } from '@angular/core';
import { es, Translations } from './i18n/es';
import { en } from './i18n/en';

// Los idiomas soportados como tipo TypeScript (solo 'es' o 'en' son válidos)
export type Lang = 'es' | 'en';

// Mapa de idiomas: relaciona la clave del idioma con su diccionario
const DICTIONARIES: Record<Lang, Translations> = { es, en };

// La clave que usamos en localStorage para recordar la preferencia del usuario
const STORAGE_KEY = 'portfolio-lang';

@Injectable({ providedIn: 'root' })
export class TranslationService {

  /**
   * signal<Lang> — variable reactiva que guarda el idioma actual.
   * Cuando cambia, todos los componentes que la usen se actualizan solos.
   * Leemos localStorage para restaurar la preferencia guardada; si no hay
   * nada guardado, usamos 'es' (español) por defecto.
   */
  private _lang = signal<Lang>(
    (localStorage.getItem(STORAGE_KEY) as Lang | null) ?? 'es'
  );

  /**
   * computed() — crea un signal derivado (de solo lectura).
   * Cada vez que _lang cambie, Angular recalcula este valor automáticamente.
   * Aquí simplemente seleccionamos el diccionario correcto.
   *
   * Equivalente en Java: un getter que llama a otro atributo.
   */
  private _dict = computed<Translations>(() => DICTIONARIES[this._lang()]);

  /**
   * Signal público de solo lectura que expone el idioma.
   * Los componentes pueden leerlo con: translationService.lang()
   * El () al final es cómo se "lee" un signal en Angular.
   */
  readonly lang = this._lang.asReadonly();

  /**
   * Función de traducción principal.
   * Uso: t('nav.about') → "Sobre mí" (en español) o "About" (en inglés)
   *
   * @param key - Ruta de punto separada: 'seccion.clave' o 'seccion.subseccion.clave'
   * @returns   - El texto en el idioma activo, o la key si no se encuentra
   */
  t(key: string): string {
    // Dividimos la clave por puntos y vamos navegando el objeto diccionario
    const value = key.split('.').reduce(
      (obj: unknown, k: string) => (obj as Record<string, unknown>)?.[k],
      this._dict() as unknown
    );

    // Si encontramos un string, lo retornamos. Si no, retornamos la key
    // para que sea fácil darse cuenta si falta una traducción.
    return typeof value === 'string' ? value : key;
  }

  /**
   * Retorna un array de strings para claves que apuntan a listas.
   * Uso: tArray('experience.job1.bullets') → ['bullet1', 'bullet2', ...]
   */
  tArray(key: string): string[] {
    const value = key.split('.').reduce(
      (obj: unknown, k: string) => (obj as Record<string, unknown>)?.[k],
      this._dict() as unknown
    );
    return Array.isArray(value) ? value : [];
  }

  /**
   * Cambia el idioma activo.
   * Llamar a set() en un signal actualiza su valor y dispara
   * la re-renderización de todos los componentes que lo usan.
   */
  setLang(lang: Lang): void {
    this._lang.set(lang);
    // Guardamos la preferencia para que persista al refrescar la página
    localStorage.setItem(STORAGE_KEY, lang);
  }

  /** Alterna entre español e inglés */
  toggleLang(): void {
    this.setLang(this._lang() === 'es' ? 'en' : 'es');
  }
}
