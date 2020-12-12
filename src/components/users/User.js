import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import PropTypes from 'prop-types'


const User = ({ user, getUser, userRepos, match, loading, repos }) => {
    useEffect(() => {
        getUser(match.params.login)
        userRepos(match.params.login)
        //eslint-disable-next-line
    }, [])

    const { login, avatar_url, html_url, name, company, blog, location, bio, public_repos, public_gists, followers, following, hireable } = user;


    if (loading) return <Spinner />
    return (
        <Fragment>
            <Link to='/' className='btn btn-dark mb-3 mx-3'>Back to Search</Link>
                Hireable: {hireable ? <i className="fas fa-check text-success"></i> : <i className="fas fa-times-circle text-danger"></i>}
            <div className='row'>
                <div className="col-md-6 card text-center">
                    <img src={avatar_url} alt="avatar" className="card-img-top rounded-circle"
                        style={{ width: '40%', margin: '0 auto' }} />
                    <div className="card-body">
                        <h3 className="card-title">{name}</h3>
                        <div className="card-body">
                            {location &&
                                <Fragment>
                                    <strong>Location:</strong> {location} <br />
                                </Fragment>}

                        </div>
                    </div>
                </div>
                <div className="col-md-6 card">
                    <div className="card-body">
                        {bio && <Fragment>
                            <h3 className='card-title'>Bio</h3>
                            {bio} <br />
                        </Fragment>}

                        <a href={html_url} className='btn btn-dark my-3'>Visit Github Profile</a>
                        <br />
                        {login &&
                            <Fragment>
                                <strong>username:</strong> {login} <br />
                            </Fragment>}
                        {blog &&
                            <Fragment>
                                <strong>Website:</strong> {blog} <br />
                            </Fragment>}

                        {company &&
                            <Fragment>
                                <strong>Company:</strong> {company} <br />
                            </Fragment>}
                    </div>
                </div>
                <div className="col-md-12 py-3 card d-flex flex-row justify-content-around">
                    <span className="badge badge-success" style={{ fontSize: '1.3rem' }} > Followers: {followers}</span>
                    <span className="badge  badge-danger" style={{ fontSize: '1.3rem' }} > Following: {following}</span>
                    <span className="badge  badge-dark" style={{ fontSize: '1.3rem' }} > Public Repos:: {public_repos}</span>
                    <span className="badge  badge-light" style={{ fontSize: '1.3rem' }} > Public Gists:: {public_gists}</span>
                </div>
            </div>
            <h3 className='my-2'>Recent Repos</h3>
            <Repos repos={repos} />
        </Fragment>

    )
}

User.PropType = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired,
    getUser: PropTypes.func.isRequired,
    userRepos: PropTypes.func.isRequired
}
export default User;
