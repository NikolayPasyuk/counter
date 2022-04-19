export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('app-bll')
        if (serializedState) {
            return JSON.parse(serializedState)
        }
    } catch (err) {
        return undefined
    }
}

export const saveState = (state: {}) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('app-bll', serializedState)
    } catch (err) {
        //ignore write errors
    }
}