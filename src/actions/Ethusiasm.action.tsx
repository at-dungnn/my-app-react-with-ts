// Declare action and type of action
import {INCREMENT_ENTHUSIASM,DECREMENT_ENTHUSIASM} from '../constants';
import { Action } from 'redux';
export interface IncrementEnthusiasm extends Action<INCREMENT_ENTHUSIASM> {
    type : INCREMENT_ENTHUSIASM;
}
export interface DecrementEnthusiasm extends Action<DECREMENT_ENTHUSIASM> {
    type: DECREMENT_ENTHUSIASM;
}

export function incrementEnthusiasm(): IncrementEnthusiasm{
    return {
        type: INCREMENT_ENTHUSIASM
    };
}
export function decrementEnthusiasm(): DecrementEnthusiasm{
    return {
        type: DECREMENT_ENTHUSIASM
    };
}
// Note : 
// We've created two types that describe what increment actions and decrement actions should look like. 
// We also created a type (EnthusiasmAction) to describe cases where an action could be an increment or a decrement