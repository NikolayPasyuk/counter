import {stateMaxNumberToCounterAC, stateSetNumberToCounterAC, stateStartNumberToCounterAC} from '../actions';

type ActionsType =
    ReturnType<typeof stateMaxNumberToCounterAC>
    | ReturnType<typeof stateStartNumberToCounterAC>
    | ReturnType<typeof stateSetNumberToCounterAC>

export type initialStateType = typeof initialState

const initialState = {
    value: false
}

export const stateReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'STATE-MAX-TO-NUMBER-COUNTER':
            return {
                ...state,
                value: action.value
            }
        case 'STATE-START-NUMBER-TO-COUNTER':
            return {
                ...state,
                value: action.value
            }
        case 'STATE-SET-NUMBER-TO-COUNTER':
            return {
                ...state,
                value: action.value
            }

        default:
            return state
    }
}
