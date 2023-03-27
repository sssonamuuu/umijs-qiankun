import { LwPlaceholder } from '@lw/components';
import { Consts } from '@lw/consts';
import { useGlobalState } from '@lw/hooks';
import { ErrorUtils } from '@lw/utils';
import { Outlet } from '@umijs/max';
import { ConfigProvider } from 'hammer';
import { useEffect } from 'react';

export default function () {
  const { theme, initState, init } = useGlobalState();

  /** 子项目单独运行，需要初始化 */
  useEffect(() => {
    initState === void 0 && init();
  }, [initState]);

  return (
    <ConfigProvider theme={theme}>
      {initState === null ? (
        <Outlet />
      ) : initState === void 0 || initState.code === Consts.Enums.HTTP_OR_ERROR_CODE.LOADING ? (
        <LwPlaceholder error={ErrorUtils.loading} />
      ) : (
        <LwPlaceholder error={initState} />
      )}
    </ConfigProvider>
  );
}
