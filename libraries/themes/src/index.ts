import { StringUtils } from '@lw/utils';

import { CustomThemeTypes } from './interface';
import { darkTheme } from './themes/dark';
import { defaultTheme } from './themes/default';

export const themes = {
  default: defaultTheme,
  dark: darkTheme,
};

export function insertCssVariable (theme: CustomThemeTypes) {
  for (const [key, value] of Object.entries(theme)) {
    document.body.style.setProperty(`--lw-theme-${StringUtils.toSnakeCase(key)}`, value);
  }
}

export * from './interface';
