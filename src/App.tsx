import React from 'react';
import './App.css';
import SettingsCounter from './SettingsCounter';
import Counter from './Counter';
import {AppRootStateType} from './bll/store';
import {useDispatch, useSelector} from 'react-redux';
import {addNumberToCounterAC, onClickResetToCounterAC, setOnClickToCounterAC} from './bll/counter-reducer';
import {setMaxNumberToCounterAC} from './bll/maxNumber-reducer';
import {startNumberToCounterAC} from './bll/startNumber-reducer';
import {stateMaxNumberToCounterAC, stateSetNumberToCounterAC, stateStartNumberToCounterAC} from './bll/state-reducer';

function App() {

    const dispatch = useDispatch()

    const count = useSelector<AppRootStateType, number>(state => state.counter.value)
    const max = useSelector<AppRootStateType, number>(state => state.maxNumber.value)
    const startValue = useSelector<AppRootStateType, number>(state => state.startNumber.value)
    const state = useSelector<AppRootStateType, boolean>(state => state.state.value)


    const maxCallbackFunction = (title: number) => {
        dispatch(setMaxNumberToCounterAC(title))
        dispatch(stateMaxNumberToCounterAC(true))
    }

    const startCallbackFunction = (value: number) => {
        dispatch(startNumberToCounterAC(value))
        dispatch(stateStartNumberToCounterAC(true))
    }

    const addNumberToCounter = () => {
        if (count < max) {
            dispatch(addNumberToCounterAC())
        }
    }

    const onClickResetToCounter = () => {
        dispatch(onClickResetToCounterAC())
    }

    const setOnClickFunction = () => {
        dispatch(setOnClickToCounterAC(startValue))
        dispatch(stateSetNumberToCounterAC(!state))
    }

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
