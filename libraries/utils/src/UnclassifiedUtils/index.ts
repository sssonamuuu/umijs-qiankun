export class UnclassifiedUtils {
  static isNullOrUndefined (value: any): boolean {
    return value === null || value === void 0;
  }

  static genUUID () {
    return Math.random().toString(16).replace(/\./, '');
  }
}
