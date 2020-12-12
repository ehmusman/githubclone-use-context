import React from 'react'
import RepoItem from './RepoItem'
import PropTypes from 'prop-types'


function Repos({ repos }) {
    return <div className='card-columns'>
        {repos.map(repo =>
            <RepoItem
                key={repo.id}
                repo={repo}
            />)
        }
    </div>
}

Repos.protoType = {
    repos: PropTypes.array.isRequired
}
export default Repos
