type stateMaxNumberActionType = ReturnType<typeof stateMaxNumberToCounterAC>
type stateStartNumberActionType = ReturnType<typeof stateStartNumberToCounterAC>
type stateSetNumberActionType = ReturnType<typeof stateSetNumberToCounterAC>

type ActionsType = stateMaxNumberActionType | stateStartNumberActionType | stateSetNumberActionType
const initialState = {
    value: false
}
export type initialStateType = typeof initialState

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

export const stateMaxNumberToCounterAC = (value: boolean) => {
    return {
        type: 'STATE-MAX-TO-NUMBER-COUNTER', value
    } as const
}

export const stateStartNumberToCounterAC = (value: boolean) => {
    return {
        type: 'STATE-START-NUMBER-TO-COUNTER', value
    } as const
}

export const stateSetNumberToCounterAC = (value: boolean) => {
    return {
        type: 'STATE-SET-NUMBER-TO-COUNTER', value
    } as const
}
