import { shuffle } from "../shuffle";

describe("function/Array/shuffle", () => {
  test("shuffle", () => {
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const shuffled = shuffle(array);

    expect(shuffled).toEqual(expect.arrayContaining(array));
    expect(shuffled).toHaveLength(array.length);
  });
});
