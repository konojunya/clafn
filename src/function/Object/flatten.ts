export function flatten<T = { [K: string]: any }>(
  object: T,
  separate = "."
): Object {
  const result = {} as { [K: string]: any };

  for (const [key, value] of Object.entries(object)) {
    if (typeof value === "object" && !Array.isArray(value)) {
      const tmp = flatten(value);

      for (const [nestedKey, nestedValue] of Object.entries(tmp)) {
        result[`${key}${separate}${nestedKey}`] = nestedValue;
      }
    } else {
      result[key] = value;
    }
  }

  return result;
}
