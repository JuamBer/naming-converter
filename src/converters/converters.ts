import {
  StringConverter,
  camelCaseRegex,
  kebabCaseRegex,
  pascalCaseRegex,
  snakeCaseRegex,
} from "../shared/models/definitions";

/**
 * Converts a string from camel case to pascal case.
 *
 * @example
 * camelToPascal("thisIsAnExample"); // ThisIsAnExample
 *
 * @param str the camel case string to convert
 * @returns the string converted to pascal case
 */
export const camelToPascal: StringConverter = (str: string) => {
  if (!camelCaseRegex.test(str)) {
    console.error(`String "${str}" is not in camel case.`);
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Converts a string from camel case to kebab case.
 *
 * @example
 * camelToKebab("thisIsAnExample"); // this-is-an-example
 *
 * @param str the camel case string to convert
 * @returns the string converted to kebab case
 */
export const camelToKebab: StringConverter = (str: string) => {
  if (!camelCaseRegex.test(str)) {
    console.error(`String "${str}" is not in camel case.`);
  }
  return str.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
};

/**
 * Converts a string from camel case to snake case.
 *
 * @example
 * camelToSnake("thisIsAnExample"); // this_is_an_example
 *
 * @param str the camel case string to convert
 * @returns the string converted to snake case
 */
export const camelToSnake: StringConverter = (str: string) => {
  if (!camelCaseRegex.test(str)) {
    console.error(`String "${str}" is not in camel case.`);
  }
  return str.replace(/([a-z0-9])([A-Z])/g, "$1_$2").toLowerCase();
};

/**
 * Converts a string from pascal case to camel case.
 *
 * @example
 * pascalToCamel("ThisIsAnExample"); // thisIsAnExample
 *
 * @param str the pascal case string to convert
 * @returns the string converted to camel case
 */
export const pascalToCamel: StringConverter = (str: string) => {
  if (!pascalCaseRegex.test(str)) {
    console.error(`String "${str}" is not in pascal case.`);
  }
  return str.charAt(0).toLowerCase() + str.slice(1);
};

/**
 * Converts a string from pascal case to kebab case.
 *
 * @example
 * pascalToKebab("ThisIsAnExample"); // this-is-an-example
 *
 * @param str the pascal case string to convert
 * @returns the string converted to kebab case
 */
export const pascalToKebab: StringConverter = (str: string) => {
  if (!pascalCaseRegex.test(str)) {
    console.error(`String "${str}" is not in pascal case.`);
  }
  return str
    .replace(/([A-Z])/g, "-$1")
    .toLowerCase()
    .replace(/^-/, "");
};

/**
 * Converts a string from pascal case to snake case.
 *
 * @example
 * pascalToSnake("ThisIsAnExample"); // this_is_an_example
 *
 * @param str the pascal case string to convert
 * @returns the string converted to snake case
 */
export const pascalToSnake: StringConverter = (str: string) => {
  if (!pascalCaseRegex.test(str)) {
    console.error(`String "${str}" is not in pascal case.`);
  }
  return str
    .replace(/([A-Z])/g, "_$1")
    .toLowerCase()
    .replace(/^_/, "");
};

/**
 * Converts a string from kebab case to camel case.
 *
 * @example
 * kebabToCamel("this-is-an-example"); // thisIsAnExample
 *
 * @param str the kebab case string to convert
 * @returns the string converted to camel case
 */
export const kebabToCamel: StringConverter = (str: string) => {
  if (!kebabCaseRegex.test(str)) {
    console.error(`String "${str}" is not in kebab case.`);
  }
  return str.replace(/-([a-z0-9])/g, (_, match) => match.toUpperCase());
};

/**
 * Converts a string from kebab case to pascal case.
 *
 * @example
 * kebabToPascal("this-is-an-example"); // ThisIsAnExample
 *
 * @param str the kebab case string to convert
 * @returns the string converted to pascal case
 */
export const kebabToPascal: StringConverter = (str: string) => {
  if (!kebabCaseRegex.test(str)) {
    console.error(`String "${str}" is not in kebab case.`);
  }
  const camelCaseStr = kebabToCamel(str);
  return camelToPascal(camelCaseStr);
};

/**
 * Converts a string from kebab case to snake case.
 *
 * @example
 * kebabToSnake("this-is-an-example"); // this_is_an_example
 *
 * @param str the kebab case string to convert
 * @returns the string converted to snake case
 */
export const kebabToSnake: StringConverter = (str: string) => {
  if (!kebabCaseRegex.test(str)) {
    console.error(`String "${str}" is not in kebab case.`);
  }
  return str.replace(/-/g, "_");
};

/**
 * Converts a string from snake case to camel case.
 *
 * @example
 * snakeToCamel("this_is_an_example"); // thisIsAnExample
 *
 * @param str the snake case string to convert
 * @returns the string converted to camel case
 */
export const snakeToCamel: StringConverter = (str: string) => {
  if (!snakeCaseRegex.test(str)) {
    console.error(`String "${str}" is not in snake case.`);
  }
  return str.replace(/_([a-z0-9])/g, (_, match) => match.toUpperCase());
};

/**
 * Converts a string from snake case to pascal case.
 *
 * @example
 * snakeToPascal("this_is_an_example"); // ThisIsAnExample
 *
 * @param str the snake case string to convert
 * @returns the string converted to pascal case
 */
export const snakeToPascal: StringConverter = (str: string) => {
  if (!snakeCaseRegex.test(str)) {
    console.error(`String "${str}" is not in snake case.`);
  }
  const camelCaseStr = snakeToCamel(str);
  return camelToPascal(camelCaseStr);
};

/**
 * Converts a string from snake case to kebab case.
 *
 * @example
 * snakeToKebab("this_is_an_example"); // this-is-an-example
 *
 * @param str the snake case string to convert
 * @returns the string converted to kebab case
 */
export const snakeToKebab: StringConverter = (str: string) => {
  if (!snakeCaseRegex.test(str)) {
    console.error(`String "${str}" is not in snake case.`);
  }
  return str.replace(/_/g, "-");
};

/**
 * A converter that does nothing.
 *
 * @param str the string to convert
 * @returns the string as is
 */
export const cameConverter: StringConverter = (str: string) => str;
