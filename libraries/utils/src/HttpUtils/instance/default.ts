import '@yzw/net/src/axios-extension.d';

import configs from '@lw/configs';
import { Consts } from '@lw/consts';
import type { ResponseData } from '@yzw/net';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { message } from 'hammer';

import { ErrorUtils } from '../../ErrorUtils';

const defaultInstance = axios.create({
  timeout: 18000,
  withCredentials: true,
  baseURL: configs.apiBaseUrl,
});

function reqSuccess (config: AxiosRequestConfig) {
  config.data ??= {};
  return config;
}

function reqError (error: Error) {
  return Promise.reject(error);
}

function resSuccess (res: AxiosResponse<ResponseData<unknown>>) {
  const { data, config: { showWarn = true, originalResp = false } } = res;

  if (originalResp) {
    return res;
  }

  if (!data.success) {
    if (data.message && showWarn) {
      message.error(data.message);
    }

    if (data.code === Consts.Enums.HTTP_OR_ERROR_CODE.UNLOGIN) {
      message.error('登录已失效，正在跳转登录页面');
      location.href = configs.contractorUrl;
    }

    throw new ErrorUtils(data.code, data.message);
  }

  return data.data;
}

function resError (error: AxiosError<Response>) {
  if (error.message === 'Network Error') {
    message.error('网络异常，请检查网络');
    throw new ErrorUtils(Consts.Enums.HTTP_OR_ERROR_CODE.NETWORK, '网络异常，请检查网络');
  } else if (/timeout/i.test(error.message)) {
    message.error('访问超时，请重试');
    throw new ErrorUtils(Consts.Enums.HTTP_OR_ERROR_CODE.TIMEOUT, '访问超时，请重试');
  }
  throw new ErrorUtils(Consts.Enums.HTTP_OR_ERROR_CODE.DEFAULT, '服务器异常');
}

defaultInstance.interceptors.request.use(reqSuccess, reqError);
defaultInstance.interceptors.response.use(resSuccess, resError);

export { defaultInstance };
