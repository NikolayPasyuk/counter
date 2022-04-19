import React, {FC, memo} from 'react';

type ButtonPropsType = {
    title: 'set' | 'inc' | 'reset'
    count: number
    startValue: number
    maxValue: number
    callback: () => void
    state: boolean
}

export const UniversalButton: FC<ButtonPropsType> = memo(({
                                                              title, count, startValue, maxValue,
                                                              callback, state
                                                          }) => {

    const onClickHandler = () => {
        callback()
    }

    const disabled = startValue >= maxValue || startValue < 0 || title === 'inc'
        ? count === maxValue || state
        : title === 'set' ? !state
            : state

    return (
        <button disabled={disabled}
                className={'universal-button'}
                onClick={onClickHandler}>{title}
        </button>
    )
})