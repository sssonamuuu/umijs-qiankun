export type StorageUnitType = 'B' | 'KB' | 'MB' | 'GB' | 'TB';

export class UnitUtils {
  static StorageUnit = {
    transform (size: number, from: StorageUnitType, to: StorageUnitType) {
      const sizes: StorageUnitType[] = ['B', 'KB', 'MB', 'GB', 'TB'];
      const fromIndex = sizes.indexOf(from);
      const toIndex = sizes.indexOf(to);
      if (!~fromIndex || !~toIndex) {
        throw Error('单位错误');
      }
      return 1024 ** (fromIndex - toIndex) * size;
    },
  };
}
