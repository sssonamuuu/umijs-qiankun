import { DiffConfigProps } from './interface';

const stg: DiffConfigProps = {
  apiBaseUrl: 'https://db-api-stg.yzw.cn/',
  contractorUrl: 'https://lw-pretest.yzw.cn/',
  subContractorUrl: 'https://lwjob-pretest.yzw.cn/',
  fileUploadUrl: 'https://lwres-zj.yzw.cn/',
  fileResourceUrl: 'https://lwres.yzw.cn/',
  apps: {
    '@app/main': {
      devServerPort: 8000,
      buildPublicPath: '//static-stg.yzw.cn/stg/lw-main-web/',
      /** 主应用，不需要配置微服务的配置 */
      microAppPath: '',
      microAppEntry: '',
    },
  },
};

export default stg;
