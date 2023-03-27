import config from '@lw/configs';
import { defineConfig } from '@umijs/max';
import path from 'path';
const pkg = require(path.join(process.cwd(), 'package.json'));

export default defineConfig({
  hash: true,
  // 默认esbuild压缩器在微前端基座的时候对某些接入的子系统会出现死循环的情况，暂未查明是什么原因。先改为terser
  jsMinifier: 'terser',
  publicPath: config.apps[pkg.name as keyof typeof config.apps].buildPublicPath,
});
