import { DictionaryService } from '@lw/services';
import { ThemeTypeKey } from '@lw/themes';
import FrontEndCache from 'front-end-cache';

export const DICTIONARY = new FrontEndCache<DictionaryService.Model>('DICTIONARY');

export const THEME = new FrontEndCache<ThemeTypeKey>('THEME');
