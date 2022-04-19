import {setMaxNumberToCounterAC} from '../actions';

type ActionsType = ReturnType<typeof setMaxNumberToCounterAC>

const initialState = {
    value: 5
}
export type initialStateType = typeof initialState

export const maxNumberReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'SET-MAX-NUMBER-TO-COUNTER':
            return {
                ...state,
                value: action.title
            }

        default:
            return state
    }
}

