import { Consts } from '@lw/consts';

type Code = typeof Consts.Enums.HTTP_OR_ERROR_CODE[keyof typeof Consts.Enums.HTTP_OR_ERROR_CODE];

export class ErrorUtils {
  code: Code;
  title: string;
  message?: string;

  constructor (code: Code, title: string, message?: string) {
    this.code = code;
    this.title = title;
    this.message = message;
  }

  static loading = new ErrorUtils(Consts.Enums.HTTP_OR_ERROR_CODE.LOADING, '加载中...');

  static error = new ErrorUtils(Consts.Enums.HTTP_OR_ERROR_CODE.DEFAULT, '服务器异常');

  static formatCatchError (e: any): ErrorUtils {
    return e instanceof ErrorUtils ? e : ErrorUtils.error;
  }
}
