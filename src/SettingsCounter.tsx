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


const SettingsCounter: FC<SetPropsType> = memo((props: SetPropsType) => {

    const setOnClickHandler = () => {
        props.onClickCallback()
    }
    const onClickMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.maxCallback(parseInt(e.currentTarget.value, 10))
    }

    const onClickStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.startCallback(parseInt(e.currentTarget.value, 10))
    }


    return (
        <div className={'counter-body'}>
            <div className={'table-number'}>

                <div className={'set-number'}>
                    <span className={'value-max'}>max value:</span>
                    <input
                        value={props.maxValue}
                        onChange={onClickMaxHandler} className={
                        props.startValue >= props.maxValue ? 'start-error' : 'set-input'}
                        type={'number'}>
                    </input>
                </div>

                <div className={'set-number'}>
                    <span className={'value-start'}>start value:</span>
                    <input
                        value={props.startValue}
                        onChange={onClickStartHandler}
                        className={props.startValue < 0 || props.startValue >= props.maxValue
                            ? 'start-error' : 'set-input'}
                        type={'number'}>
                    </input>
                </div>

            </div>

            <div className={'counter-function'}>
                <UniversalButton
                    title={'set'}
                    count={props.count}
                    startValue={props.startValue}
                    maxValue={props.maxValue}
                    callback={setOnClickHandler}
                    state={props.state}
                />
            </div>
        </div>
    );
});

export default SettingsCounter;