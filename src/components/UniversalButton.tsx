import React, {memo} from 'react';

type ButtonPropsType = {
    title: 'set' | 'inc' | 'reset'
    count: number
    startValue: number
    maxValue: number
    callback: () => void
    state: boolean
}

export const UniversalButton = memo((props: ButtonPropsType) => {

    const onClickHandler = () => {
        props.callback()
    }

    const disabled = props.startValue >= props.maxValue || props.startValue < 0
    || props.title === 'inc' ? props.count === props.maxValue || props.state
        : props.title === 'set' ? !props.state
            : props.state

    return (
        <button disabled={disabled}
                className={'universal-button'}
                onClick={onClickHandler}>{props.title}
        </button>
    )
})