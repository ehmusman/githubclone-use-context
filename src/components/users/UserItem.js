import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url } }) => {
    return (
        <div className='card text-center p-2 col-3 m-3'>
            <img
                src={avatar_url}
                alt=""
                style={{ width: '60px', margin: '0 auto' }}
                className='round-img'
            />
            <h5>{login}</h5>
            <div>
                <Link
                    to={`user/${login}`}
                    className="btn btn-dark btn-sm py-2"
                >more</Link></div>
        </div>
    )
}
UserItem.propTypes = {
    user: PropTypes.object.isRequired
}
export default UserItem
