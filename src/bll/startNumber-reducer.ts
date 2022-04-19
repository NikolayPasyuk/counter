type ActionsType = ReturnType<typeof startNumberToCounterAC>

const initialState = {
    value: 0
}
export type initialStateType = typeof initialState

export const startNumberReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'START-NUMBER-TO-COUNTER':
            return {
                ...state,
                value: action.value
            }

        default:
            return state
    }
}


export const startNumberToCounterAC = (value: number) => {
    return {
        type: 'START-NUMBER-TO-COUNTER', value
    } as const
}

