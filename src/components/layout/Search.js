import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import GithubContext from '../../context/github/githubContext'


const Search = ({ defineAlert }) => {
    const [text, setText] = useState('')
    const githubContext = useContext(GithubContext)

    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            defineAlert('danger', "Please fill all the fields")
        } else {
            githubContext.searchUser(text)
            setText('')
        }
    }
    const onChange = (e) => {
        setText(e.target.value);
    }
    return (
        <div>

            <form onSubmit={onSubmit}>
                <div className="row">
                    <div className="col-md-8 from-group">
                        <input type="text" className='form-control form-control-lg'
                            placeholder='Enter Username...'
                            name='text'
                            value={text}
                            onChange={onChange}
                        />
                    </div>
                    <div className="col-md-4 form-group">
                        <input type="submit" value="Submit" className='btn btn-dark btn-block btn-lg' />
                    </div>
                </div>
            </form>
            {githubContext.users.length > 0 &&
                <button
                    className="btn btn-block btn-lg btn-danger"
                    onClick={githubContext.clearUsers}>
                    Clear
                    </button>}

        </div>
    )
}
Search.propTypes = {
    defineAlert: PropTypes.func.isRequired
}

export default Search
