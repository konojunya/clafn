import { zeroPadding } from "../zero-padding";

describe("function/Number/zero-padding", () => {
  test.each<[number, number, string]>([
    [0, 2, "00"],
    [1, 2, "01"],
    [10, 2, "10"],
    [100, 2, "100"],
  ])("zeroPadding(%p, %p) = %p", (input, len, expected) => {
    expect(zeroPadding(input, len)).toBe(expected);
  });
});
