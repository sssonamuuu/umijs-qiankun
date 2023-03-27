import { Transpiler } from '@umijs/bundler-webpack/dist/types';
import { defineConfig } from '@umijs/max';
import path from 'path';

export default defineConfig({
  // @ts-ignore
  srcTranspiler: Transpiler.esbuild,
  // 如果报错装一个mkcert，MAC: brew install mkcert，https://github.com/FiloSottile/mkcert
  https: {
    cert: path.join(__dirname, './yzw_cn_qa.crt'),
    key: path.join(__dirname, './yzw_cn_qa.key'),
  },
  mfsu: false,
  plugins: ['@yzw-web/umi-plugin-yun-api'],
  /** 卡了就关 */
  yunApi: { /*enableDevProxy: false*/ },
});
