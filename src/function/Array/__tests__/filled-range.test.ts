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
