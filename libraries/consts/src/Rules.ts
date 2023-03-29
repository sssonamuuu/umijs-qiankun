/**
 * 由于正则都是可以为空
 *
 * 所有规则第一条都是 required 的
 *
 * 如果允许为空的 使用 xxx.slice(1);
 */
import { Rule } from 'antd/es/form';

import * as REGEX from './RegExp';

export const PHONE: Rule[] = [
  { required: true, message: '请输入手机号码' },
  { pattern: REGEX.PHONE, message: '请输入正确的手机号码' },
];
