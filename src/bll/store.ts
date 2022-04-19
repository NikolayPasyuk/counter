import {combineReducers, compose, createStore, Store} from 'redux';
import {counterReducer} from './reducers/counter-reducer';
import {maxNumberReducer} from './reducers/maxNumber-reducer';
import {loadState, saveState} from '../utils/localStorage-utils';
import {startNumberReducer} from './reducers/startNumber-reducer';
import {stateReducer} from './reducers/state-reducer';


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const rootReducers = combineReducers({
    counter: counterReducer,
    maxNumber: maxNumberReducer,
    startNumber: startNumberReducer,
    state: stateReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store: Store<AppRootStateType> = createStore(rootReducers, loadState(), composeEnhancers());

export type AppRootStateType = ReturnType<typeof rootReducers>

store.subscribe(() => {
    saveState({
        maxNumber: store.getState().maxNumber
    })
})

//@ts-ignore
window.store = store;
