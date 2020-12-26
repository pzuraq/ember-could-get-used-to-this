// Lifted from: https://github.com/ember-modifier/ember-modifier/blob/master/types/%40ember/modifier/index.d.ts
// https://github.com/emberjs/ember.js/issues/18967
declare module '@ember/modifier' {
  export function setModifierManager<Manager extends unknown = unknown>(
    factory: (owner: unknown) => Manager,
    obj: object
  ): void;

  export function capabilities(version: string): unknown;
}
