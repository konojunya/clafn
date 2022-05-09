# function/Array

## filled-range

```ts
import { filledRange } from "../filled-range";

describe("function/Array/filled-range", () => {
  test.each<[[number, number], number[]]>([
    [
      [0, 1],
      [0, 1],
    ],
    [
      [20, 25],
      [20, 21, 22, 23, 24, 25],
    ],
  ])("filledRange(%p, %p) = %p", (input, expected) => {
    expect(filledRange(...input)).toEqual(expected);
  });
});

```
## range

```ts
import { range } from "../range";

describe("function/Array/range", () => {
  test.each<[[number, ...number[]], number[]]>([
    [[0], []],
    [[0, 1], [0]],
    [[1], [0]],
    [
      [0, 5],
      [0, 1, 2, 3, 4],
    ],
    [[5], [0, 1, 2, 3, 4]],
  ])("range(%p) = %p", (input, expected) => {
    expect(range(...input)).toEqual(expected);
  });
});

```
## shuffle

```ts
import { shuffle } from "../shuffle";

describe("function/Array/shuffle", () => {
  test("shuffle", () => {
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const shuffled = shuffle(array);

    expect(shuffled).toEqual(expect.arrayContaining(array));
    expect(shuffled).toHaveLength(array.length);
  });
});

```
      