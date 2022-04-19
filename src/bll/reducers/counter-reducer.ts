import {addNumberToCounterAC, onClickResetToCounterAC, setOnClickToCounterAC} from '../actions';

export  type ActionsType = ReturnType<typeof addNumberToCounterAC> | ReturnType<typeof onClickResetToCounterAC>
    | ReturnType<typeof setOnClickToCounterAC>

const initialState = {
    value: 0
}
type initialStateType = typeof initialState

export const counterReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'ADD-NUMBER-TO-COUNTER':
            return {
                ...state,
                value: state.value + 1
            }
        case 'ONClICK-RESET-TO-COUNTER':
            return {
                ...state,
                value: 0
            }
        case 'SET-ONClICK-TO-COUNTER':
            return {
                ...state,
                value: action.startNumber
            }
        default:
            return state
    }
}
