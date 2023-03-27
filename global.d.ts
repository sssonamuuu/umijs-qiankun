declare module '*.less';
declare module '*.css';

declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    NODE_ENV: 'development' | 'production';
    PROJECT_ENV: 'local' | 'dev' | 'qa' | 'stg' | 'prd';
  }
}

declare interface PaginationHttpReq<T> {
  pageNum: number;
  pageSize?: number;
  direction?: 'DESC' | 'ASC';
  orderBy?: string;
  param?: T;
}

declare interface PaginationHttpRes<T> {
  pageSize: number;
  pageNum: number;
  records: T[];
  totalPage: number;
  totalCount: number;
}

declare type AppNameTypes = '@app/main';

declare type RemovePromise<T> = T extends Promise<infer R> ? R : never;
