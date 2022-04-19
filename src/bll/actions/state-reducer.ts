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
