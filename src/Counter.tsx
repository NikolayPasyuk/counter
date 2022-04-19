import React, {useCallback} from 'react';
import {UniversalButton} from './UniversalButton';

type SetPropsType = {
    maxValue: number
    startValue: number
    count: number
    addNumberToCounter: () => void
    onClickResetToCounter: () => void
    state: boolean
}


const Counter = React.memo((props: SetPropsType) => {

    const onClickIncHandler = useCallback(() => {
        props.addNumberToCounter()
    }, [props.addNumberToCounter])

    const onClickResetHandler = () => {
        props.onClickResetToCounter()
    }

    const errorName = <span className={'error-text'}>Incorrect value</span>

    const enterValues = !props.state ? props.count
        : <span className={'set-value'}>enter values and press 'set'</span>

    const error = props.startValue >= props.maxValue || props.startValue < 0

    const errorNumber = props.count === props.maxValue ? 'number-error' : ''


    return (

        <div className={'counter-body'}>
            <div className={'table-number'}>
                <span className={`${errorNumber}`}>{error ? errorName : enterValues}</span>
            </div>

            <div className={'counter-function'}>
                <UniversalButton
                    title={'inc'}
                    count={props.count}
                    startValue={props.startValue}
                    maxValue={props.maxValue}
                    callback={onClickIncHandler}
                    state={props.state}
                />
                <UniversalButton
                    title={'reset'}
                    count={props.count}
                    startValue={props.startValue}
                    maxValue={props.maxValue}
                    callback={onClickResetHandler}
                    state={props.state}
                />
            </div>
        </div>
    );
});

export default Counter;