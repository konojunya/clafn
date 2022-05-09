# Map

## RegExpMap

```ts
const map = new RegExpMap([[/te.*/, "value"]]);

map.match("test1"); // true
map.get("test1"); // "value"
```

[test code](https://github.com/konojunya/clafn/blob/main/src/class/Map/__tests__/regexp-map.test.ts)
