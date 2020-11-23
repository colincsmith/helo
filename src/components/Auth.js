import axios from 'axios'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUser} from '../redux/reducer'

class Auth extends Component{
    constructor(){
        super()

        this.state = {
            username: '',
            password: '',
        }
    }

    handleUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    handlePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    login = async () => {
        const {username, password} = this.state
        try{
            const user = await axios.post('/auth/login', {username, password})
            this.props.getUser(user.data.id, user.data.username)
            this.props.history.push('/dashboard')
        } catch(err){
            alert(err.response.request.response)
        }
    }

    registerUser = async (e) => {
        const {username, password} = this.state
        try {
            const user = await axios.post('/auth/register', {username, password})
            this.props.getUser(user.data.id, user.data.username)
            this.props.history.push('/dashboard')
        }
        catch(err)
        {
            alert(err.response.request.response)
        }
    }

    render(){
        return(
        <div className='login'> 
            <div>
                <h1>Helo</h1>
                <div>
                    <h5>Username:</h5>
                    <input onChange={this.handleUsername} type='text'/>
                </div>

                <div>
                    <h5>Password: </h5>
                    <input onChange={this.handlePassword} type='password'/>
                </div>

                <div>
                    <button onClick={this.login}>Login</button>
                    <button onClick={this.registerUser}>Register</button>
                </div>
            </div>
            </div>
        )
    }
}

export default connect(null, {getUser})(Auth)