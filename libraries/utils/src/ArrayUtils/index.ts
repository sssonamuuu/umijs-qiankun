import { UnclassifiedUtils } from '../UnclassifiedUtils';

export class ArrayUtils {
  /** 数组或则单个值转数组 */
  static singleOrArrayToArray <T> (value?: T | T[]): T[] {
    return UnclassifiedUtils.isNullOrUndefined(value) ? [] : Array.isArray(value) ? value : [value!];
  }

  /** 获取数组第一个值或则单个值 */
  static getSingleOrArrayFirst <T> (value?: T | T[]): T | undefined {
    return Array.isArray(value) ? value[0] : value;
  }

  /** 判断是否有重复项 */
  static hasDuplicate <T> (array: T[], key?: keyof T) {
    return array.length !== (key ? new Set(array.map(item => item[key])).size : new Set(array).size);
  }

  /** 去重 */
  static removeDuplicate<T, R>(array: T[], key: keyof T, mapFn: (item: T) => R): R[];
  static removeDuplicate<T>(array: T[], key?: keyof T): T[];
  static removeDuplicate <T, R>(array: T[], key?: keyof T, mapFn?: (item: T) => R): T[] | R[] {
    const map: Map<any, T> = new Map();
    const res: T[] | R[] = [];

    for (const item of array) {
      const currentKey = key ? item[key] : item;
      if (!map.get(currentKey)) {
        res.push(mapFn ? mapFn(item) : item as any);
        map.set(currentKey, item);
      }
    }

    return res;
  }
}
