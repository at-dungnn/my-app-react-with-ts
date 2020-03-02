// Handle action and return state by reducers
import { IncrementEnthusiasm, DecrementEnthusiasm } from '../actions';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants';
import { IEnthusiasm } from '../types/Enthusiasm.types';

const initialState: IEnthusiasm = {
    languageName: 'Type Scripts',
    enthusiasmLevel: 1
};

export function enthusiasm(state: IEnthusiasm = initialState, action: IncrementEnthusiasm | DecrementEnthusiasm): IEnthusiasm {
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
        case DECREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: state.enthusiasmLevel - 1 };
        default:
            return state;
    }
}
