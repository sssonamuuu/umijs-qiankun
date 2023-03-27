import configs from '@lw/configs';
import axios, { AxiosRequestConfig } from 'axios';
import { message } from 'hammer';

import { UnclassifiedUtils } from '../UnclassifiedUtils';

const downloadInstance = axios.create({
  baseURL: configs.apiBaseUrl,
  responseType: 'arraybuffer',
  timeout: 3e4,
});

export type DownloadOption<D = unknown, P = unknown> = Omit<AxiosRequestConfig, 'data' | 'params'> & {
  filename?: string;
  fileMimeType?: string;
  showWarn?: boolean;
} & (D extends null | void | unknown ? {} : { data: D }) & (P extends null | void | unknown ? {} : { params: P });

export function download ({
  filename = UnclassifiedUtils.genUUID(),
  fileMimeType,
  showWarn = true,
  ...options
}: DownloadOption<unknown, unknown>) {
  return downloadInstance(options).then(res => {
    const link = document.createElement('a');
    const blob = new Blob([res.data], { type: fileMimeType || res.headers['content-type'] });
    link.style.display = 'none';
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }).catch(() => {
    showWarn && message.error('下载失败');
  });
}
