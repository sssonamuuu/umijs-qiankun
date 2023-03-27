
import { Consts } from '@lw/consts';
import { insertCssVariable, themes, ThemeTypes } from '@lw/themes';
import { ErrorUtils } from '@lw/utils';
import React, { useState } from 'react';

interface InitOption {
}

export interface UseGlobalStateProps {
  theme: ThemeTypes;
  setTheme: (themeTypes: ThemeTypes) => void;
  initState?: ErrorUtils | null;
  init(options?: InitOption): Promise<void>;
  setInitState: React.Dispatch<ErrorUtils | null>;
}

export default function () {
  const [theme, setTheme] = useState(themes[Consts.Caches.THEME.getItem('default')] || themes.default);
  const [initState, setInitState] = useState<UseGlobalStateProps['initState']>();

  const state: UseGlobalStateProps = {
    theme,
    setTheme (theme) {
      Consts.Caches.THEME.setItem(theme.type);
      setTheme(theme);
      insertCssVariable(theme.token);
    },
    initState,
    setInitState,
    async init (options: InitOption = {}) {
      console.log(options);
      setInitState(ErrorUtils.loading);
      try {
        await Promise.resolve();
        setInitState(null);
      } catch (e) {
        setInitState(ErrorUtils.formatCatchError(e));
      }
    },
  };

  return state;
}
