// Handle action and return state by reducers
import { IncrementEnthusiasm, DecrementEnthusiasm } from '../actions';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants';
import { StoreState } from '../types';

const initialState: StoreState = {
    languageName: 'Type Scripts',
    enthusiasmLevel: 1
};

export function enthusiasm(state: StoreState = initialState, action: IncrementEnthusiasm | DecrementEnthusiasm): StoreState {
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
        case DECREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: state.enthusiasmLevel - 1 };
        default:
            return state;
    }
}

// Note :
// Notice that we're using the object spread (...state) which allows us to create a shallow copy of our state, while replacing the enthusiasmLevel. 
// _____It's important_____ that the enthusiasmLevel property come last, since otherwise it would be overridden by the property in our old state.