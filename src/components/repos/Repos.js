import React, { useContext } from 'react'
import RepoItem from './RepoItem'
import PropTypes from 'prop-types'
import GithubContext from '../../context/github/githubContext'


function Repos() {
    const { repos } = useContext(GithubContext)
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
