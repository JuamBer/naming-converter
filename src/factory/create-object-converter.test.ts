import { CaseType } from "../shared/models/definitions";
import { testObjects } from "../shared/test/test.mock";
import { createObjectConverter } from "./create-object-converter";

describe("createObjectConverter", () => {
  const camelToPascal = createObjectConverter(
    CaseType.CAMEL_CASE,
    CaseType.PASCAL_CASE
  );
  const camelToKebab = createObjectConverter(
    CaseType.CAMEL_CASE,
    CaseType.KEBAB_CASE
  );
  const camelToSnake = createObjectConverter(
    CaseType.CAMEL_CASE,
    CaseType.SNAKE_CASE
  );
  const pascalToCamel = createObjectConverter(
    CaseType.PASCAL_CASE,
    CaseType.CAMEL_CASE
  );
  const pascalToKebab = createObjectConverter(
    CaseType.PASCAL_CASE,
    CaseType.KEBAB_CASE
  );
  const pascalToSnake = createObjectConverter(
    CaseType.PASCAL_CASE,
    CaseType.SNAKE_CASE
  );
  const kebabToCamel = createObjectConverter(
    CaseType.KEBAB_CASE,
    CaseType.CAMEL_CASE
  );
  const kebabToPascal = createObjectConverter(
    CaseType.KEBAB_CASE,
    CaseType.PASCAL_CASE
  );
  const kebabToSnake = createObjectConverter(
    CaseType.KEBAB_CASE,
    CaseType.SNAKE_CASE
  );
  const snakeToCamel = createObjectConverter(
    CaseType.SNAKE_CASE,
    CaseType.CAMEL_CASE
  );
  const snakeToPascal = createObjectConverter(
    CaseType.SNAKE_CASE,
    CaseType.PASCAL_CASE
  );
  const snakeToKebab = createObjectConverter(
    CaseType.SNAKE_CASE,
    CaseType.KEBAB_CASE
  );

  describe("camelToPascal", () => {
    test("converts the keys of an object from camelCase to PascalCase", () => {
      const input = testObjects.camelCase;
      const expected = testObjects.pascalCase;

      const actual = camelToPascal(input);

      expect(actual).toEqual(expected);
    });
  });
  describe("camelToKebab", () => {
    test("converts the keys of an object from camelCase to kebab-case", () => {
      const input = testObjects.camelCase;
      const expected = testObjects.kebabCase;

      const actual = camelToKebab(input);

      expect(actual).toEqual(expected);
    });
  });
  describe("camelToSnake", () => {
    test("converts the keys of an object from camelCase to snake_case", () => {
      const input = testObjects.camelCase;
      const expected = testObjects.snakeCase;

      const actual = camelToSnake(input);

      expect(actual).toEqual(expected);
    });
  });
  describe("pascalToCamel", () => {
    test("converts the keys of an object from PascalCase to camelCase", () => {
      const input = testObjects.pascalCase;
      const expected = testObjects.camelCase;

      const actual = pascalToCamel(input);

      expect(actual).toEqual(expected);
    });
  });
  describe("pascalToKebab", () => {
    test("converts the keys of an object from PascalCase to kebab-case", () => {
      const input = testObjects.pascalCase;
      const expected = testObjects.kebabCase;

      const actual = pascalToKebab(input);

      expect(actual).toEqual(expected);
    });
  });
  describe("pascalToSnake", () => {
    test("converts the keys of an object from PascalCase to snake_case", () => {
      const input = testObjects.pascalCase;
      const expected = testObjects.snakeCase;

      const actual = pascalToSnake(input);

      expect(actual).toEqual(expected);
    });
  });
  describe("kebabToCamel", () => {
    test("converts the keys of an object from kebab-case to camelCase", () => {
      const input = testObjects.kebabCase;
      const expected = testObjects.camelCase;

      const actual = kebabToCamel(input);

      expect(actual).toEqual(expected);
    });
  });
  describe("kebabToPascal", () => {
    test("converts the keys of an object from kebab-case to PascalCase", () => {
      const input = testObjects.kebabCase;
      const expected = testObjects.pascalCase;

      const actual = kebabToPascal(input);

      expect(actual).toEqual(expected);
    });
  });
  describe("kebabToSnake", () => {
    test("converts the keys of an object from kebab-case to snake_case", () => {
      const input = testObjects.kebabCase;
      const expected = testObjects.snakeCase;

      const actual = kebabToSnake(input);

      expect(actual).toEqual(expected);
    });
  });
  describe("snakeToCamel", () => {
    test("converts the keys of an object from snake_case to camelCase", () => {
      const input = testObjects.snakeCase;
      const expected = testObjects.camelCase;

      const actual = snakeToCamel(input);

      expect(actual).toEqual(expected);
    });
  });
  describe("snakeToPascal", () => {
    test("converts the keys of an object from snake_case to PascalCase", () => {
      const input = testObjects.snakeCase;
      const expected = testObjects.pascalCase;

      const actual = snakeToPascal(input);

      expect(actual).toEqual(expected);
    });
  });
  describe("snakeToKebab", () => {
    test("converts the keys of an object from snake_case to kebab-case", () => {
      const input = testObjects.snakeCase;
      const expected = testObjects.kebabCase;

      const actual = snakeToKebab(input);

      expect(actual).toEqual(expected);
    });
  });
});
