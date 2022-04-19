import React, {useCallback} from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {selectCount, selectMax, selectStartValue, selectState} from './bll/selectors';
import {Counter, SettingsCounter} from './components'
import {
    addNumberToCounterAC,
    onClickResetToCounterAC,
    setMaxNumberToCounterAC,
    setOnClickToCounterAC,
    startNumberToCounterAC,
    stateMaxNumberToCounterAC,
    stateSetNumberToCounterAC,
    stateStartNumberToCounterAC
} from './bll/actions';

function App() {

    const dispatch = useDispatch()

    const count = useSelector(selectCount)
    const max = useSelector(selectMax)
    const startValue = useSelector(selectStartValue)
    const state = useSelector(selectState)


    const maxCallbackFunction = useCallback((title: number) => {
        dispatch(setMaxNumberToCounterAC(title))
        dispatch(stateMaxNumberToCounterAC(true))
    }, [dispatch])

    const startCallbackFunction = useCallback((value: number) => {
        dispatch(startNumberToCounterAC(value))
        dispatch(stateStartNumberToCounterAC(true))
    }, [dispatch])

    const addNumberToCounter = useCallback(() => {
        if (count < max) {
            dispatch(addNumberToCounterAC())
        }
    }, [dispatch, count, max])

    const onClickResetToCounter = useCallback(() => {
        dispatch(onClickResetToCounterAC())
    }, [dispatch])

    const setOnClickFunction = useCallback(() => {
        dispatch(setOnClickToCounterAC(startValue))
        dispatch(stateSetNumberToCounterAC(!state))
    }, [dispatch, startValue, state])

    return (
        <div className="counter">
            <SettingsCounter
                onClickCallback={setOnClickFunction}
                maxCallback={maxCallbackFunction}
                maxValue={max}
                startValue={startValue}
                startCallback={startCallbackFunction}
                count={count}
                state={state}
            />

            <Counter
                addNumberToCounter={addNumberToCounter}
                onClickResetToCounter={onClickResetToCounter}
                maxValue={max}
                startValue={startValue}
                count={count}
                state={state}
            />
        </div>
    );
}

export default App;
