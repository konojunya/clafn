export class RegExpMap<K extends RegExp, V> extends Map<K, V> {
  public constructor(payload: [K, V][]) {
    super(payload);
  }

  public match(key: string): boolean {
    const keys = this.keys();

    for (const k of keys) {
      if (k.test(key)) {
        return true;
      }
    }

    return false;
  }
}
