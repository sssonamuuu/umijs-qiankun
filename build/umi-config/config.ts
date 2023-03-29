import config from '@lw/configs';
import { defaultTheme } from '@lw/themes/src/themes/default';
import { StringUtils } from '@lw/utils/src/StringUtils';
import { defineConfig } from '@umijs/max';
import fs from 'fs';
import path from 'path';
import tailwindcss from 'tailwindcss';

const libraries = path.join(__dirname, '../../libraries');

const pkg = require(path.join(process.cwd(), 'package.json'));

process.env.HOST = 'local.yzw.cn.qa';
process.env.PORT = `${config.apps[pkg.name as keyof typeof config.apps]?.devServerPort}`;

export default defineConfig({
  npmClient: 'pnpm',
  alias: fs.readdirSync(libraries).reduce((p, c) => {
    const pkg = require(path.join(libraries, c, 'package.json'));
    if (pkg.name.startsWith('@lw/')) {
      return { ...p, [pkg.name]: path.join(libraries, c) };
    }
    return p;
  }, {}),
  theme: Object.entries(defaultTheme.token).reduce((p, [key]) => ({
    ...p,
    [StringUtils.toSnakeCase(key)]: `var(--lw-theme-${StringUtils.toSnakeCase(key)})`,
  }), {}),
  chainWebpack (chain) {
    chain.resolve.extensions
      .prepend('.web.ts')
      .prepend('.web.tsx')
      .prepend('.web.js');
  },
  cssLoaderModules: {
    // 配置驼峰式使用
    exportLocalsConvention: 'camelCase',
  },
  title: '加载中...',
  // 不识别 components 和 hooks 目录下的文件 和 ts文件 为路由
  conventionRoutes: { exclude: [/\/components?\//, /\/hooks?\//, /.ts$/]},
  define: { 'process.env.PROJECT_ENV': process.env.PROJECT_ENV },
  // favicons: [
  //   // 'https://mro-image.oss-cn-beijing.aliyuncs.com/mro-static/favicon.ico',
  // ],
  extraPostCSSPlugins: [tailwindcss()],
  /**
   * umi插件部分
   */
  // umi自带的tailwindcss build暂时有问题
  // tailwindcss: {},
  model: {},
  base: '/',
  qiankun: { slave: {} },
  forkTSChecker: {},
});
