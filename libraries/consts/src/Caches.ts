import { ThemeTypeKey } from '@lw/themes';
import FrontEndCache from 'front-end-cache';

export const THEME = new FrontEndCache<ThemeTypeKey>('THEME');
