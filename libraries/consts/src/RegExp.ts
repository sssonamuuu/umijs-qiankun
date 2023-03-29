/**
 * 所有的正则都允许为空
 *
 * 即 (xxxx)?
 *
 * 如果有非空的required，执行判断
 */

export const PHONE = /^(1\d{10})?$/;
