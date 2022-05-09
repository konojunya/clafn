export function createMirrorMap<T>(entries: [T, T][]): Map<T, T> {
  const map = new Map();

  entries.forEach(([key, value]) => {
    map.set(key, value);
    map.set(value, key);
  });

  return map;
}
