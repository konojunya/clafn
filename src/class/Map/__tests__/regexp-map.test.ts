import { RegExpMap } from "../regexp-map";

describe("regexp-map", () => {
  // RegExpMap
  test("Should size is same", () => {
    const map = new Map([[/test1/, "test1"]]);
    const regExpMap = new RegExpMap([[/test1/, "test1"]]);

    expect(map.size).toEqual(regExpMap.size);
  });

  test("Should has can be used", () => {
    const map = new RegExpMap([[/te.*/, "test1"]]);
    const map2 = new Map([[/te.*/, "test1"]]);

    expect(map.match("test")).toBeTruthy();
    expect(map.match("t1")).toBeFalsy();
  });
});
