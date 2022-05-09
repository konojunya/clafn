# function/Map

## create-mirror-map

```ts
import { createMirrorMap } from "../create-mirror-map";

describe("function/Map/create-mirror-map", () => {
  test("createMirrorMap", () => {
    const map = createMirrorMap([
      ["key1", "value1"],
      ["key2", "value2"],
    ]);

    expect(map.size).toBe(4);
    expect(map.get("key1")).toBe("value1");
    expect(map.get("value1")).toBe("key1");
    expect(map.has("key1")).toBeTruthy();
    expect(map.has("key3")).toBeFalsy();

    map.set("key1", "value3");
    expect(map.get("key1")).toBe("value3");
  });
});

```
      