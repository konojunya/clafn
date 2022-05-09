// Ref: https://www.softel.co.jp/blogs/tech/archives/2328
export function shuffle<T>(array: T[]): T[] {
  if (process.env.NEXT_PUBLIC_APP_ENV === "test") return array;

  return array
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
}
