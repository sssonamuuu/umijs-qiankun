import { ArrayUtils } from '../ArrayUtils';
import { StorageUnitType, UnitUtils } from '../UnitUtils';

export class FileUtils {
  static isMatchAccept (fileOrFileList: File | File[], accept?: string) {
    if (accept === '*' || !accept) {
      return true;
    }

    const files = ArrayUtils.singleOrArrayToArray(fileOrFileList);
    const accepts = accept.split(',').map(item => item.trim());
    return files.every(file => {
      const ext = file.name.split('.').pop();
      const type = file.type;
      return accepts.some(acc => acc.startsWith('.') ? ext === acc.slice(1) : new RegExp(acc.replace(/\*/g, '.*')).test(type));
    });
  }

  static isBelowSize (fileOrFileList: File | File[], size: number, unit: StorageUnitType) {
    const files = ArrayUtils.singleOrArrayToArray(fileOrFileList);
    return files.every(file => UnitUtils.StorageUnit.transform(file.size, 'B', unit) <= size);
  }
}
