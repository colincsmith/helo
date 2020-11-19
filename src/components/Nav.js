import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Nav extends Component{
    render(){
        return(
            <div>This is the Nav Component
                <button><Link to='/dashboard'>Home</Link></button>
                <button><Link to='/new'>New Post</Link></button>
                <button><Link to='/'>Logout</Link></button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        username: state.username
    }
}

export default connect(mapStateToProps)(Nav)