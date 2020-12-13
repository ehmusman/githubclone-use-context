import React, { useContext } from 'react'
import AlertContext from '../../context/alert/alertContext'

const Alert = () => {
    const { alert, clearAlert } = useContext(AlertContext)
    const setClearAlert = () => {
        clearAlert('clear')
    }
    return (
        alert !== null &&
        <div className={`alert alert-${alert.type}`}>
            <i
                className="fas fa-exclam
            ation-circle"></i>
            {alert.msg}
            <i
                className="fas fa-times"
                style={{ float: 'right', cursor: 'pointer' }}
                onClick={setClearAlert}
            ></i>

        </div>

    )
}

export default Alert
