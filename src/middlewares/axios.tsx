import axios, {AxiosResponse, AxiosError} from 'axios';
import {Dispatch, Store} from 'redux';
import {IStoreState} from '../types';
import {APPLICATION_INIT} from '../constants';
import {IApplicationInit} from '../actions/App.action';

const initAxiosInterceptor = () => {
  axios.defaults.baseURL = process.env.REACT_APP_API_URL;
  axios.interceptors.request.use(
    config => {
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );
  axios.interceptors.response.use(
    (response: AxiosResponse<any>) => {
      return response;
    },
    (error: AxiosError) => {
      if (!axios.isCancel(error)) {
        // call logout
        console.log(error)
      }
      return Promise.reject(error);
    },
  );
};

export const initAxios = (store: Store<IStoreState>) => (
  next: Dispatch<
    IApplicationInit
  >,
) => (action: IApplicationInit) => {
  switch (action.type) {
    case APPLICATION_INIT:
      console.log(store);
      initAxiosInterceptor();
      break;
  }

  return next(action);
};
