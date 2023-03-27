import { DiffConfigProps } from './interface';

const prd: DiffConfigProps = {
  apiBaseUrl: 'https://db-api.yzw.cn/',
  contractorUrl: 'https://lw.yzw.cn/',
  subContractorUrl: 'https://lwjob.yzw.cn/',
  fileUploadUrl: 'https://lwres-zj.yzw.cn/',
  fileResourceUrl: 'https://lwres.yzw.cn/',
  apps: {
    '@app/main': {
      devServerPort: 8000,
      buildPublicPath: '//static.yzw.cn/prd/lw-main-web/',
      /** 主应用，不需要配置微服务的配置 */
      microAppPath: '',
      microAppEntry: '',
    },
  },
};

export default prd;
