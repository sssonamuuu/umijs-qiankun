import '../tailwind.css';

import { StyleProvider } from '@ant-design/cssinjs';
import { HttpUtils } from '@lw/utils';
import { defineApp } from '@umijs/max';
import { HttpClientContext } from '@yzw/net';

export default defineApp({
  rootContainer (continer) {
    return (
      <StyleProvider hashPriority="high">
        <HttpClientContext value={HttpUtils.instance.default}>
          {continer}
        </HttpClientContext>
      </StyleProvider>
    );
  },
});
