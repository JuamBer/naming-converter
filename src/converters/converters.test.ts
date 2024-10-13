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
} from "./converters";

describe("converters", () => {
  describe("camelToPascal", () => {
    test("converts a camel case string to pascal case", () => {
      expect(camelToPascal("car")).toBe("Car");
      expect(camelToPascal("goldenRetriever")).toBe("GoldenRetriever");
      expect(camelToPascal("moonLanding")).toBe("MoonLanding");
      expect(camelToPascal("fastRedCar")).toBe("FastRedCar");
      expect(camelToPascal("bigBlueSkyToday")).toBe("BigBlueSkyToday");
    });
  });

  describe("camelToKebab", () => {
    test("converts a camel case string to kebab case", () => {
      expect(camelToKebab("car")).toBe("car");
      expect(camelToKebab("goldenRetriever")).toBe("golden-retriever");
      expect(camelToKebab("moonLanding")).toBe("moon-landing");
      expect(camelToKebab("fastRedCar")).toBe("fast-red-car");
      expect(camelToKebab("bigBlueSkyToday")).toBe("big-blue-sky-today");
    });
  });

  describe("camelToSnake", () => {
    test("converts a camel case string to snake case", () => {
      expect(camelToSnake("car")).toBe("car");
      expect(camelToSnake("goldenRetriever")).toBe("golden_retriever");
      expect(camelToSnake("moonLanding")).toBe("moon_landing");
      expect(camelToSnake("fastRedCar")).toBe("fast_red_car");
      expect(camelToSnake("bigBlueSkyToday")).toBe("big_blue_sky_today");
    });
  });

  describe("pascalToCamel", () => {
    test("converts a pascal case string to camel case", () => {
      expect(pascalToCamel("Car")).toBe("car");
      expect(pascalToCamel("GoldenRetriever")).toBe("goldenRetriever");
      expect(pascalToCamel("MoonLanding")).toBe("moonLanding");
      expect(pascalToCamel("FastRedCar")).toBe("fastRedCar");
      expect(pascalToCamel("BigBlueSkyToday")).toBe("bigBlueSkyToday");
    });
  });

  describe("pascalToKebab", () => {
    test("converts a pascal case string to kebab case", () => {
      expect(pascalToKebab("Car")).toBe("car");
      expect(pascalToKebab("GoldenRetriever")).toBe("golden-retriever");
      expect(pascalToKebab("MoonLanding")).toBe("moon-landing");
      expect(pascalToKebab("FastRedCar")).toBe("fast-red-car");
      expect(pascalToKebab("BigBlueSkyToday")).toBe("big-blue-sky-today");
    });
  });

  describe("pascalToSnake", () => {
    test("converts a pascal case string to snake case", () => {
      expect(pascalToSnake("Car")).toBe("car");
      expect(pascalToSnake("GoldenRetriever")).toBe("golden_retriever");
      expect(pascalToSnake("MoonLanding")).toBe("moon_landing");
      expect(pascalToSnake("FastRedCar")).toBe("fast_red_car");
      expect(pascalToSnake("BigBlueSkyToday")).toBe("big_blue_sky_today");
    });
  });

  describe("kebabToCamel", () => {
    test("converts a kebab case string to camel case", () => {
      expect(kebabToCamel("car")).toBe("car");
      expect(kebabToCamel("golden-retriever")).toBe("goldenRetriever");
      expect(kebabToCamel("moon-landing")).toBe("moonLanding");
      expect(kebabToCamel("fast-red-car")).toBe("fastRedCar");
      expect(kebabToCamel("big-blue-sky-today")).toBe("bigBlueSkyToday");
    });
  });

  describe("kebabToPascal", () => {
    test("converts a kebab case string to pascal case", () => {
      expect(kebabToPascal("car")).toBe("Car");
      expect(kebabToPascal("golden-retriever")).toBe("GoldenRetriever");
      expect(kebabToPascal("moon-landing")).toBe("MoonLanding");
      expect(kebabToPascal("fast-red-car")).toBe("FastRedCar");
      expect(kebabToPascal("big-blue-sky-today")).toBe("BigBlueSkyToday");
    });
  });

  describe("kebabToSnake", () => {
    test("converts a kebab case string to snake case", () => {
      expect(kebabToSnake("car")).toBe("car");
      expect(kebabToSnake("golden-retriever")).toBe("golden_retriever");
      expect(kebabToSnake("moon-landing")).toBe("moon_landing");
      expect(kebabToSnake("fast-red-car")).toBe("fast_red_car");
      expect(kebabToSnake("big-blue-sky-today")).toBe("big_blue_sky_today");
    });
  });

  describe("snakeToCamel", () => {
    test("converts a snake case string to camel case", () => {
      expect(snakeToCamel("car")).toBe("car");
      expect(snakeToCamel("golden_retriever")).toBe("goldenRetriever");
      expect(snakeToCamel("moon_landing")).toBe("moonLanding");
      expect(snakeToCamel("fast_red_car")).toBe("fastRedCar");
      expect(snakeToCamel("big_blue_sky_today")).toBe("bigBlueSkyToday");
    });
  });

  describe("snakeToPascal", () => {
    test("converts a snake case string to pascal case", () => {
      expect(snakeToPascal("car")).toBe("Car");
      expect(snakeToPascal("golden_retriever")).toBe("GoldenRetriever");
      expect(snakeToPascal("moon_landing")).toBe("MoonLanding");
      expect(snakeToPascal("fast_red_car")).toBe("FastRedCar");
      expect(snakeToPascal("big_blue_sky_today")).toBe("BigBlueSkyToday");
    });
  });

  describe("snakeToKebab", () => {
    test("converts a snake case string to kebab case", () => {
      expect(snakeToKebab("car")).toBe("car");
      expect(snakeToKebab("golden_retriever")).toBe("golden-retriever");
      expect(snakeToKebab("moon_landing")).toBe("moon-landing");
      expect(snakeToKebab("fast_red_car")).toBe("fast-red-car");
      expect(snakeToKebab("big_blue_sky_today")).toBe("big-blue-sky-today");
    });
  });

  describe("cameConverter", () => {
    test("returns the input string unchanged", () => {
      expect(cameConverter("car")).toBe("car");
      expect(cameConverter("goldenRetriever")).toBe("goldenRetriever");
      expect(cameConverter("moonLanding")).toBe("moonLanding");
      expect(cameConverter("fastRedCar")).toBe("fastRedCar");
      expect(cameConverter("bigBlueSkyToday")).toBe("bigBlueSkyToday");
    });
  });
});
