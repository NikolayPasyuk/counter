export const setMaxNumberToCounterAC = (title: number) => {
    return {
        type: 'SET-MAX-NUMBER-TO-COUNTER', title
    } as const
}