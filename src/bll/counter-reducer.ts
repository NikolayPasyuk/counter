export type addNumberToCounterActionType = ReturnType<typeof addNumberToCounterAC>
export type onClickResetToCounterActionType = ReturnType<typeof onClickResetToCounterAC>
export type setOnClickCounterActionType = ReturnType<typeof setOnClickToCounterAC>

export  type ActionsType = addNumberToCounterActionType | onClickResetToCounterActionType
    | setOnClickCounterActionType

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


export const addNumberToCounterAC = () => (
    {type: 'ADD-NUMBER-TO-COUNTER'} as const)

export const onClickResetToCounterAC = () => (
    {type: 'ONClICK-RESET-TO-COUNTER'} as const)

export const setOnClickToCounterAC = (startNumber: number) => (
    {type: 'SET-ONClICK-TO-COUNTER', startNumber} as const)

