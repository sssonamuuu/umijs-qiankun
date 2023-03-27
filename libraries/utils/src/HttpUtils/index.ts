import { download } from './download';
import { defaultInstance } from './instance/default';
import { upload } from './upload';

export class HttpUtils {
  static instance = { default: defaultInstance };
  static upload = upload;
  static download = download;
}

export type { DownloadOption } from './download';
