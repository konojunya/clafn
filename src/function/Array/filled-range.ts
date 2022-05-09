export function filledRange(start: number, end: number): number[] {
  const length = Math.abs(end + 1 - start);
  const result = Array(length);

  for (let i = 0; i < length; i += 1) {
    result[i] = start + i;
  }

  return result;
}
