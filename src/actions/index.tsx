// Declare action and type of action
import * as constants from '../constants';
export interface IncrementEnthusiasm {
    type : constants.INCREMENT_ENTHUSIASM;
}
export interface DecrementEnthusiasm {
    type: constants.DECREMENT_ENTHUSIASM;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

export function incrementEnthusiasm(): IncrementEnthusiasm{
    return {
        type: constants.INCREMENT_ENTHUSIASM
    };
}
export function decrementEnthusiasm(): DecrementEnthusiasm{
    return {
        type: constants.DECREMENT_ENTHUSIASM
    };
}
// Note : 
// We've created two types that describe what increment actions and decrement actions should look like. 
// We also created a type (EnthusiasmAction) to describe cases where an action could be an increment or a decrement