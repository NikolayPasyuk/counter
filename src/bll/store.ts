import {combineReducers, createStore} from 'redux';
import {counterReducer} from './counter-reducer';
import {maxNumberReducer} from './maxNumber-reducer';
import {loadState, saveState} from '../utils/localStorage-utils';
import {startNumberReducer} from './startNumber-reducer';
import {stateReducer} from './state-reducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    maxNumber: maxNumberReducer,
    startNumber: startNumberReducer,
    state:stateReducer
})

export const store = createStore(rootReducer, loadState());

store.subscribe(() => {
    saveState({
        maxNumber: store.getState().maxNumber
    })
})

export type AppRootStateType = ReturnType<typeof rootReducer>

