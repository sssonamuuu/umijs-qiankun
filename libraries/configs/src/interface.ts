export interface CommonConfigProps {
}

export interface DiffConfigProps {
  apiBaseUrl: string;
  contractorUrl: string;
  subContractorUrl: string;
  fileUploadUrl: string;
  fileResourceUrl: string;
  apps: Record<AppNameTypes, {
    devServerPort: number;
    buildPublicPath: string;
    microAppPath: string;
    microAppEntry: string;
  }
  >;
}
