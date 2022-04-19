import React, {ChangeEvent, FC, memo, useCallback} from 'react';
import {UniversalButton} from './UniversalButton';

type SetPropsType = {
    onClickCallback: () => void
    maxCallback: (title: number) => void
    startCallback: (value: number) => void
    maxValue: number
    startValue: number
    count: number
    state: boolean
}


const SettingsCounter: FC<SetPropsType> = memo(({
                                                    onClickCallback,
                                                    maxCallback,
                                                    startCallback,
                                                    maxValue,
                                                    startValue,
                                                    count,
                                                    state
                                                }) => {

    const setOnClickHandler = useCallback(() => {
        onClickCallback()
    }, [onClickCallback])

    const onClickMaxHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        maxCallback(+e.currentTarget.value)
    }, [maxCallback])

    const onClickStartHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        startCallback(+e.currentTarget.value)
    }, [startCallback])


    return (
        <div className={'counter-body'}>
            <div className={'table-number'}>

                <div className={'set-number'}>
                    <span className={'value-max'}>max value:</span>
                    <input
                        value={maxValue}
                        onChange={onClickMaxHandler} className={
                        startValue >= maxValue ? 'start-error' : 'set-input'}
                        type={'number'}>
                    </input>
                </div>

                <div className={'set-number'}>
                    <span className={'value-start'}>start value:</span>
                    <input
                        value={startValue}
                        onChange={onClickStartHandler}
                        className={startValue < 0 || startValue >= maxValue
                            ? 'start-error' : 'set-input'}
                        type={'number'}>
                    </input>
                </div>

            </div>

            <div className={'counter-function'}>
                <UniversalButton
                    title={'set'}
                    count={count}
                    startValue={startValue}
                    maxValue={maxValue}
                    callback={setOnClickHandler}
                    state={state}
                />
            </div>
        </div>
    );
});

export default SettingsCounter;