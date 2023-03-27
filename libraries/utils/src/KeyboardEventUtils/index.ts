import React from 'react';

import { KEY_MAPS } from './mappings';

type Event = React.KeyboardEvent | KeyboardEvent;

type Keys = keyof typeof KEY_MAPS;

export class KeyboardEventUtils {
  static KEY_MAPS = KEY_MAPS;

  static is (key: Keys, e: Event): boolean {
    return e.key === KEY_MAPS[key].key || e.keyCode === KEY_MAPS[key].code;
  }
}
