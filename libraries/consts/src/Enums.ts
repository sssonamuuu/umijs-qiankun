/** 负数为本地声明的 code  */
export const HTTP_OR_ERROR_CODE = {
  TIMEOUT: -3,
  NETWORK: -2,
  LOADING: -1,
  /** 请求成功 */
  SUCCESS: 200,
  /** 已登录但是无权限 */
  NO_PERMISSION: 401,
  /** 未登录、登录失效 */
  UNLOGIN: 403,
  /** 实名认证的 */
  NEED_AUTH_REALNAME: 405,
  /** 需要腾讯电子签的实名认证 */
  NEED_AUTH_REALNAME_TENCENT_SIGN: 406,
  /** 需要选择项目 */
  NEED_PROJECT: 409,
  /** 统一错误 */
  DEFAULT: 500,
  NEED_PHONE: 100000,
};
