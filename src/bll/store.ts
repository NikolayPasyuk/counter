import {combineReducers, createStore} from 'redux';
import {counterReducer} from './reducers/counter-reducer';
import {maxNumberReducer} from './reducers/maxNumber-reducer';
import {loadState, saveState} from '../utils/localStorage-utils';
import {startNumberReducer} from './reducers/startNumber-reducer';
import {stateReducer} from './reducers/state-reducer';

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

