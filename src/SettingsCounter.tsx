import React, {ChangeEvent, FC, memo} from 'react';
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

    const setOnClickHandler = () => {
        onClickCallback()
    }
    const onClickMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        maxCallback(parseInt(e.currentTarget.value, 10))
    }

    const onClickStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        startCallback(+e.currentTarget.value)
    }


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