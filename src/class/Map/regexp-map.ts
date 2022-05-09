export class RegExpMap<K extends RegExp, V> extends Map<K, V> {
  public constructor(payload: [K, V][]) {
    super(payload);
  }

  public get(key: K | string): V | undefined;
  public get(key: string): V | undefined {
    for (let [k, v] of this.entries()) {
      if (k.test(key)) {
        return v;
      }
    }

    return undefined;
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
