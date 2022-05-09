export function zeroPadding(n: number, len: number): string {
  return n.toString().padStart(len, "0");
}
