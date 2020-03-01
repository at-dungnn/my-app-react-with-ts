// Handle action and return state by reducers
import { EnthusiasmAction } from '../actions';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants';

const initialState: any = {
    languageName: 'Type Scripts',
    enthusiasmLevel: 1
};

export function enthusiasm(state = initialState, action: EnthusiasmAction): any {
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
        case DECREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: state.enthusiasmLevel - 1 };
    }
    return state;
}

// Note :
// Notice that we're using the object spread (...state) which allows us to create a shallow copy of our state, while replacing the enthusiasmLevel. 
// _____It's important_____ that the enthusiasmLevel property come last, since otherwise it would be overridden by the property in our old state.