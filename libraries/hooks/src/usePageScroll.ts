import { useCallback } from 'react';

export function usePageScroll () {
  const disablePageScroll = useCallback(() => document.querySelector('html')!.style.overflow = 'hidden', []);
  const enablePageScroll = useCallback(() => document.querySelector('html')!.style.overflow = 'auto', []);
  return { disablePageScroll, enablePageScroll };
}
