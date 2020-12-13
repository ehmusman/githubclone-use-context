import {
    DEFINE_ALERT, REMOVE_ALERT, CLEAR_ALERT
} from '../types'

export default (state, action) => {
    switch (action.type) {
        case DEFINE_ALERT:
            return {
                ...state,
                alert: action.payload
            }
        case REMOVE_ALERT:
            return {
                ...state,
                alert: null
            }
        case CLEAR_ALERT:
            return {
                ...state,
                alert: null
            }
        default:
            return state;
    }
}