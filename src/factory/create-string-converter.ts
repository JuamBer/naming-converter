import {
  cameConverter,
  camelToKebab,
  camelToPascal,
  camelToSnake,
  kebabToCamel,
  kebabToPascal,
  kebabToSnake,
  pascalToCamel,
  pascalToKebab,
  pascalToSnake,
  snakeToCamel,
  snakeToKebab,
  snakeToPascal,
} from "../converters/converters";
import { CaseType, StringConverter } from "../shared/models/definitions";

/**
 * Returns the appropriate string converter based on the from and to case types.
 * This method use the factory pattern to return the appropriate converter function.
 *
 * @example
 * const converter = createStringConverter(CaseType.CAMEL_CASE, CaseType.PASCAL_CASE);
 * converter("thisIsAnExample"); // ThisIsAnExample
 *
 * @param from the case type of the input string
 * @param to   the case type to convert the input string to
 * @returns    the string converter function
 */
export const createStringConverter = (
  from: CaseType,
  to: CaseType
): StringConverter => {
  const converters: {
    [key in CaseType]: { [key in CaseType]: StringConverter };
  } = {
    [CaseType.CAMEL_CASE]: {
      [CaseType.CAMEL_CASE]: cameConverter,
      [CaseType.PASCAL_CASE]: camelToPascal,
      [CaseType.KEBAB_CASE]: camelToKebab,
      [CaseType.SNAKE_CASE]: camelToSnake,
    },
    [CaseType.PASCAL_CASE]: {
      [CaseType.CAMEL_CASE]: pascalToCamel,
      [CaseType.PASCAL_CASE]: cameConverter,
      [CaseType.KEBAB_CASE]: pascalToKebab,
      [CaseType.SNAKE_CASE]: pascalToSnake,
    },
    [CaseType.KEBAB_CASE]: {
      [CaseType.CAMEL_CASE]: kebabToCamel,
      [CaseType.PASCAL_CASE]: kebabToPascal,
      [CaseType.KEBAB_CASE]: cameConverter,
      [CaseType.SNAKE_CASE]: kebabToSnake,
    },
    [CaseType.SNAKE_CASE]: {
      [CaseType.CAMEL_CASE]: snakeToCamel,
      [CaseType.PASCAL_CASE]: snakeToPascal,
      [CaseType.KEBAB_CASE]: snakeToKebab,
      [CaseType.SNAKE_CASE]: cameConverter,
    },
  };

  return converters[from][to];
};
