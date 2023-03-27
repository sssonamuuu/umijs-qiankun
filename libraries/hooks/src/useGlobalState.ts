// @ts-nocheck

import { useModel } from '@umijs/max';

import { UseGlobalStateProps } from './models/global';

export function useGlobalState () {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const state: UseGlobalStateProps = useModel('@@qiankunStateFromMaster') || useModel('global') || {};

  return state;
}
