export const addNumberToCounterAC = () => (
    {type: 'ADD-NUMBER-TO-COUNTER'} as const)

export const onClickResetToCounterAC = () => (
    {type: 'ONClICK-RESET-TO-COUNTER'} as const)

export const setOnClickToCounterAC = (startNumber: number) => (
    {type: 'SET-ONClICK-TO-COUNTER', startNumber} as const)

