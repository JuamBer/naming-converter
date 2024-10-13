# Naming Converter

A package for converting object keys and strings between different case types (camelCase, PascalCase, kebab-case, snake_case).

## Installation

Install the package using npm:

```sh
npm install naming-converter
```

## API

### Factory for String Converter

#### createStringConverter

Creates a new instance of the string converter.

```typescript
createStringConverter(fromCase: CaseType, toCase: CaseType): StringConverter;
```

##### Parameters

- `fromCase` - The case type of the input string.
- `toCase` - The case type of the output string.

##### Returns

A new instance of the string converter.

#### Usage

```typescript
import { createStringConverter } from "naming-converter/factory/create-string-converter";
import { CaseType } from "naming-converter/shared/models/definitions";

const stringConverter = createStringConverter(
  CaseType.CAMEL_CASE,
  CaseType.KEBAB_CASE
);

const camelCaseString = "camelCaseString";
const kebabCaseString = stringConverter.convert(camelCaseString);

console.log(kebabCaseString); // Output: camel-case-string
```

### Factory for Object Converter

#### createObjectConverter

Creates a new instance of the object converter.

```typescript
createObjectConverter(fromCase: CaseType, toCase: CaseType): ObjectConverter;
```

##### Parameters

- `fromCase` - The case type of the input object.
- `toCase` - The case type of the output object.

##### Returns

A new instance of the object converter.

#### Usage

```typescript
import { createObjectConverter } from "naming-converter/factory/create-object-converter";
import { CaseType } from "naming-converter/shared/models/definitions";

const objectConverter = createObjectConverter(
  CaseType.CAMEL_CASE,
  CaseType.KEBAB_CASE
);

const camelCaseObject = {
  camelCaseKey: "example",
};

const kebabCaseObject = objectConverter.convert(camelCaseObject);

console.log(kebabCaseObject); // Output: { "camel-case-key": "example" }
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
