import configs from '@lw/configs';
import axios, { AxiosRequestConfig } from 'axios';

interface UploadOptions {
  file: File;
  appName?: 'attachment';
  action?: 'uploadvideo';
}

export function upload ({
  file,
  appName = 'attachment',
  action,
  ...options
}: UploadOptions & Pick<AxiosRequestConfig, 'onUploadProgress'>) {
  const formdata = new FormData();
  formdata.append('file', file);

  return axios.request<{
    message: string;
    /** 原始文件名 */
    original: string;
    state: 'SUCCESS' | 'ERROR';
    /** 新生成的文件名 */
    title: string;
    url: string;
  }>({
    url: `${configs.fileUploadUrl}UploadHandler.ashx?appName=${appName || ''}&action=${action || ''}`,
    withCredentials: false,
    data: formdata,
    method: 'post',
    headers: { 'Content-Type': 'multipart/form-data' },
    ...options,
  }).then(res => {
    if (res.data.state === 'SUCCESS') {
      return res.data;
    }
    throw new Error('上传失败');
  });
}

