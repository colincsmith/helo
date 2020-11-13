import React, {Component} from 'react'
import {connect} from 'react-redux'

class Dashboard extends Component{
    render(){
        return(
            <div>
                {!this.props.isLoggedIn ?
            <div>This is the Dashboard component</div>
            :
            <div>Welcome, {this.props.user.username} to the Home page</div>    
            }
            </div>
        )
    }
}

const mapStateToProps = state => state
export default connect(mapStateToProps)(Dashboard)