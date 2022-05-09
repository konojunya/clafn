# function/Object

## flatten

```ts
import { flatten } from "../flatten";

describe("function/Object/flatten", () => {
  test.each<[{ [K in string]: any }, Object]>([
    [
      { a: "a", b: "b", c: { d: "d", e: "e" } },
      { a: "a", b: "b", "c.d": "d", "c.e": "e" },
    ],
    [
      { a: "a", b: "b", c: [] },
      { a: "a", b: "b", c: [] },
    ],
  ])("flatten(%p = %p", (input, expected) => {
    expect(flatten(input)).toEqual(expected);
  });
});

```
      