import { DiffConfigProps } from './interface';

const qa: DiffConfigProps = {
  apiBaseUrl: 'https://db-api.yzw.cn.qa/',
  contractorUrl: 'https://lw.yzw.cn.qa/',
  subContractorUrl: 'https://lwjob.yzw.cn.qa/',
  fileUploadUrl: 'https://file-internal-mapping-lw-qa.yzw.cn/',
  fileResourceUrl: 'https://file-internal-mapping-lw-qa.yzw.cn/',
  apps: {
    '@app/main': {
      devServerPort: 8000,
      buildPublicPath: '//static-qa.yzw.cn/qa/lw-main-web/',
      /** 主应用，不需要配置微服务的配置 */
      microAppPath: '',
      microAppEntry: '',
    },
  },
};

export default qa;
