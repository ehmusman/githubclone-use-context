import React from 'react'
import PropTypes from 'prop-types'

function RepoItem({ repo }) {
    return (
        <div className='card'  >
            <h5 className="card-header text-danger">
                {repo.name}
            </h5>
            <div className="card-body text-center">

                <a href={repo.html_url} className="btn btn-dark">Repo URL</a>
            </div>
        </div>
    )
}

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired
}
export default RepoItem
