import React, {FC, memo, useCallback} from 'react';
import {UniversalButton} from './UniversalButton';

type SetPropsType = {
    maxValue: number
    startValue: number
    count: number
    addNumberToCounter: () => void
    onClickResetToCounter: () => void
    state: boolean
}


const Counter: FC<SetPropsType> = memo(({
                                            maxValue,
                                            startValue,
                                            count,
                                            addNumberToCounter,
                                            onClickResetToCounter,
                                            state
                                        }) => {

    const onClickIncHandler = useCallback(() => {
        addNumberToCounter()
    }, [addNumberToCounter])

    const onClickResetHandler = useCallback(() => {
        onClickResetToCounter()
    }, [onClickResetToCounter])

    const errorName = <span className={'error-text'}>Incorrect value</span>

    const enterValues = !state ? count
        : <span className={'set-value'}>enter values and press 'set'</span>

    const error = startValue >= maxValue || startValue < 0

    const errorNumber = count === maxValue ? 'number-error' : ''


    return (

        <div className={'counter-body'}>
            <div className={'table-number'}>
                <span className={`${errorNumber}`}>{error ? errorName : enterValues}</span>
            </div>

            <div className={'counter-function'}>
                <UniversalButton
                    title={'inc'}
                    count={count}
                    startValue={startValue}
                    maxValue={maxValue}
                    callback={onClickIncHandler}
                    state={state}
                />
                <UniversalButton
                    title={'reset'}
                    count={count}
                    startValue={startValue}
                    maxValue={maxValue}
                    callback={onClickResetHandler}
                    state={state}
                />
            </div>
        </div>
    );
});

export default Counter;