import {APPLICATION_INIT} from '../constants';
import {Action} from 'redux';

export interface IApplicationInit extends Action<APPLICATION_INIT> {}

export function applicationInit(): IApplicationInit {
  return {
    type: APPLICATION_INIT,
  };
}

