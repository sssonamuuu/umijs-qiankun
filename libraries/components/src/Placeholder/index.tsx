import './index.less';

import configs from '@lw/configs';
import { Consts } from '@lw/consts';
import { ErrorUtils } from '@lw/utils';
import { Button, Result, Space, Spin } from 'hammer';

export const PROJECT_DROPDOWN_CLASSNAME = 'JS_PROJECT_DROPDOWN_CLASSNAME';

export interface LwPlaceholderProps {
  absolute?: boolean;
  error: ErrorUtils;
}

export function LwPlaceholder ({
  absolute = true,
  error: _error,
}: LwPlaceholderProps) {
  const error = _error instanceof ErrorUtils ? _error : ErrorUtils.error;

  return (
    <div className={`w-full h-full flex items-center justify-center ${absolute ? 'absolute left-0 right-0 top-0 bottom-0' : ''}`}>
      {error.code === Consts.Enums.HTTP_OR_ERROR_CODE.LOADING ? (
        <Spin size="large" tip={<div className="mt-4px">{error.title}</div>} />
      ) : (
        <Result
          status={[Consts.Enums.HTTP_OR_ERROR_CODE.NO_PERMISSION, Consts.Enums.HTTP_OR_ERROR_CODE.UNLOGIN].includes(error.code) ? '403' : '500'}
          title={error.title}
          subTitle={error.message}
          extra={(
            <Space>
              {(() => {
                if (error.code === Consts.Enums.HTTP_OR_ERROR_CODE.NO_PERMISSION || error.code === Consts.Enums.HTTP_OR_ERROR_CODE.NEED_PHONE) {
                  return <Button type="primary" onClick={() => location.href = configs.contractorUrl}>切换账号</Button>;
                }

                if (error.code === Consts.Enums.HTTP_OR_ERROR_CODE.UNLOGIN) {
                  return <Button type="primary" onClick={() => location.href = configs.contractorUrl}>去登录</Button>;
                }

                return <Button type="primary" onClick={() => location.reload()}>刷新页面重试</Button>;
              })()}
            </Space>
          )} />
      )}
    </div>
  );
}
