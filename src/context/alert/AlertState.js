import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer'

import {
    DEFINE_ALERT, REMOVE_ALERT, CLEAR_ALERT
} from '../types'


const AlertState = (props) => {
    const initialState = {
        alert: null
    }

    // define alert
    const defineAlert = (type, msg) => {
        dispatch({
            type: DEFINE_ALERT,
            payload: { type, msg }
        })
        setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000)
    }
    // Button pressed clear alert
    const clearAlert = (msg) => {
        if (msg === 'clear') {
            dispatch({ type: CLEAR_ALERT })
        }
    }
    const [state, dispatch] = useReducer(AlertReducer, initialState)


    return <AlertContext.Provider
        value={{
            alert: state.alert,
            defineAlert,
            clearAlert
        }}>
        {props.children}
    </AlertContext.Provider>

}

export default AlertState;