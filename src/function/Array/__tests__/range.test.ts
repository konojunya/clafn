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
