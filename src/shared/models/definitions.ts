export enum CaseType {
  CAMEL_CASE,
  PASCAL_CASE,
  KEBAB_CASE,
  SNAKE_CASE,
}

export const camelCaseRegex = /^[a-z]+(?:[A-Z][a-z]+)*$/;
export const pascalCaseRegex = /^[A-Z][a-z]+(?:[A-Z][a-z]+)*$/;
export const kebabCaseRegex = /^[a-z]+(?:-[a-z]+)*$/;
export const snakeCaseRegex = /^[a-z]+(?:_[a-z]+)*$/;

export type StringConverter = (str: string) => string;
export type ObjectConverter = (obj: object) => object;
