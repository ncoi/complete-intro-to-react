import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { setSearchTerm } from './actionCreators'
const { string, func, object } = React.PropTypes

const Landing = React.createClass({
    contextTypes: {
        router: object
    },
    propTypes: {
        searchTerm: string,
        dispatch: func
    },  
    handleSearchTermChange(e) {
        // this.props.dispatch(setSearchTerm(e.target.value)) // Comming from connect by default        
        this.props.setSearchTerm(e.target.value)
    },
    handleSearchSubmit(e) {
        e.preventDefault()
        this.context.router.transitionTo('/search')
    },
    render () {
        return (
            <div className='landing'>
                <form onSubmit={this.handleSearchSubmit}>
                    <h1>svideo</h1>
                    <input value={this.props.searchTerm} onChange={this.handleSearchTermChange} type='text' placeholder='Search' />
                    <Link to='/search'>or Browse All</Link>
                </form>
            </div>
        )
    }
})

const mapStateToProps = (state) => {
    return {
        searchTerm: state.searchTerm
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setSearchTerm: (searchTerm) => {
            dispatch(setSearchTerm(searchTerm))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
