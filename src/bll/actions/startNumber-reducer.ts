export const startNumberToCounterAC = (value: number) => {
    return {
        type: 'START-NUMBER-TO-COUNTER', value
    } as const
}
