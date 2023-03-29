import qs from 'qs';

export function useUrlSearch <T> (format: Partial<Record<keyof T, 'number' | 'boolean' | 'string'>> = {}) {
  const search = location.search.replace(/^\?/, '');
  const params = qs.parse(search) as any || {};

  for (const [key, value] of Object.entries<string>(params as any)) {
    if ((format as any)[key] === 'number') {
      params[key] = isNaN(+value) ? void 0 : +value;
    } else if ((format as any)[key] === 'boolean') {
      params[key] = `${value}` === 'true' ? true : false as any;
    } else if (value) {
      params[key] = value;
    }
  }
  return params as T;
}
