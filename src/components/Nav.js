import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Nav extends Component{
    constructor(){
        super()
    }

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

export default Nav