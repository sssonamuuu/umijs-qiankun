/**
 * 通过环境变量判断，这样会在编译阶段删掉多余的内容
 */
import commonConfig from './common';
import devConfig from './dev';
import localConfig from './local';
import prdConfig from './prd';
import qaConfig from './qa';
import stgConfig from './stg';

// 本地
let diffConfig = localConfig;

if (process.env.PROJECT_ENV === 'dev') {
  diffConfig = devConfig;
}

if (process.env.PROJECT_ENV === 'qa') {
  diffConfig = qaConfig;
}

if (process.env.PROJECT_ENV === 'stg') {
  diffConfig = stgConfig;
}

if (process.env.PROJECT_ENV === 'prd') {
  diffConfig = prdConfig;
}

const configs = {
  ...commonConfig,
  ...diffConfig,
};

/**
 * 其他环境的子项目配置还是用本地
 *
 * 如果需要子项目链现有环境已有的配置，修改 micro entry 的配置为本地配置
 */
if (
  process.env.NODE_ENV !== 'production' &&
  process.env.PROJECT_ENV !== 'local'
) {
  configs.apps = localConfig.apps;
}

export default configs;
