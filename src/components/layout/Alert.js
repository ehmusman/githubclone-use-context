import React from 'react'

const Alert = ({ alert, clearAlert }) => {
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
