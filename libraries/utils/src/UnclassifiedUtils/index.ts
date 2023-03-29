export class UnclassifiedUtils {
  /** 是否是空或则null */
  static isNullOrUndefined (value: any): boolean {
    return value === null || value === void 0;
  }

  /** 生成唯一值 */
  static genUUID () {
    return Math.random().toString(16).replace(/\./, '');
  }
}
