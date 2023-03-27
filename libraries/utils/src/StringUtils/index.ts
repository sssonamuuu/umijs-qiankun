export class StringUtils {
  /** 通过 _、-、大写字母等拆分成词 */
  static splitWords (str: string) {
    return str.trim().split(/[-_]/).reduce<string[]>((p, c) => {
      const res = c.match(/(^|[A-Z])[a-z1-9]*/g);
      return res ? [...p, ...res] : p;
    }, []);
  }

  /** 中横线命名 */
  static toSnakeCase (str: string) {
    const words = StringUtils.splitWords(str);
    return words.map(item => item.toLowerCase()).join('-');
  }
}
