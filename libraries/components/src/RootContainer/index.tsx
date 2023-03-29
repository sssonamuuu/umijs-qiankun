import { StyleProvider } from '@ant-design/cssinjs';
import { HttpUtils } from '@lw/utils';
import { HttpClientContext } from '@yzw/net';
import { PropsWithChildren } from 'react';

export function RootContainer ({ children }: PropsWithChildren<{}>) {
  return (
    <StyleProvider hashPriority="high">
      <HttpClientContext value={HttpUtils.instance}>
        {children}
      </HttpClientContext>
    </StyleProvider>
  );
}
