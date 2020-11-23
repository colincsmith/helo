import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateUser} from '../redux/reducer'
import axios from 'axios';

class Nav extends Component{

    getMe = async () => {
        try{
           const me = await axios.get('/api/auth/me');
           this.props.updateUser(me.data[0].username, me.data[0].picture);
        }
        catch(err){
            alert(err);
        }
    }

    componentDidMount(){
        this.getMe();
        console.log(this.props.username);
    }

    logout = async () => {
        try{
            await axios.post('/api/auth/logout');

        }
        catch(err){
            alert(err);
        }
    }

    render(){
            return(
                <div className="navBar">
                    <div className="topNavBar">
                        <div className='profile'>
                            <img alt ="profile" src={this.props.picture}/>
                            <h5>{this.props.username}</h5>
                        </div>
                            <button><Link className="navButton" to="/dashboard">Home</Link></button>
                            <button><Link className="navButton" to="/new">New Post</Link></button>
                    </div>
                    <button><Link onClick={this.logout} className="navButton" to="/">Logout</Link></button>
                </div>
            )
        }
    
}
function mapStateToProps(state){
    return{
        username: state.username,
        picture: state.picture
    }
}
export default connect(mapStateToProps, {updateUser})(Nav);