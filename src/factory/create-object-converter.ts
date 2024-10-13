import { CaseType, ObjectConverter } from "../shared/models/definitions";
import { createStringConverter } from "./create-string-converter";

/**
 * Returns the appropriate object converter based on the from and to case types.
 * The converter will recursively convert all keys in the object to the desired case type.
 * This method uses the factory pattern to return the appropriate converter function.
 *
 * @example
 * const converter = createObjectConverter(CaseType.CAMEL_CASE, CaseType.PASCAL_CASE);
 * converter({id: 1, yearOfBirth: 1990}); // {Id: 1, YearOfBirth: 1990}
 *
 * @param from the case type of the input object
 * @param to   the case type to convert the input object to
 * @returns    the object converter function
 */
export const createObjectConverter = (
  from: CaseType,
  to: CaseType
): ObjectConverter => {
  const stringConverter = createStringConverter(from, to);

  return (obj: object) => {
    if (obj instanceof Date) {
      return obj;
    }

    if (Array.isArray(obj)) {
      return obj.map((item) => createObjectConverter(from, to)(item));
    }

    if (typeof obj === "object") {
      const newObj: any = {};
      for (const key in obj) {
        const newKey = stringConverter(key);

        newObj[newKey] = createObjectConverter(from, to)((obj as any)[key]);
      }
      return newObj;
    }

    return obj;
  };
};
