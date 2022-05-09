import { RegExpMap } from "../regexp-map";

describe("class/Map/RegExpMap", () => {
  // RegExpMap
  test("Should size is same", () => {
    const map = new Map([[/test1/, "test1"]]);
    const regExpMap = new RegExpMap([[/test1/, "test1"]]);

    expect(map.size).toEqual(regExpMap.size);
  });

  test("Should match return boolean", () => {
    const map = new RegExpMap([[/te.*/, "test1"]]);

    expect(map.match("test")).toBeTruthy();
    expect(map.match("t1")).toBeFalsy();
  });

  test("Should get return value", () => {
    const map = new RegExpMap([[/te.*/, "test1"]]);

    expect(map.get("test")).toEqual("test1");
  });
});
