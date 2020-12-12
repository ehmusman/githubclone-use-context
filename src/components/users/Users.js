import React from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
const Users = ({ loading, users }) => {

    if (loading) {
        return <Spinner />
    } else {
        return <div className='row'>
            {users.map(user =>
                (
                    <UserItem
                        key={user.id}
                        user={user}
                    />
                )
            )}
        </div>
    }



}




export default Users
