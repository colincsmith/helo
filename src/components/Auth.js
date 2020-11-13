import axios from 'axios'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {loginUser} from '../redux/reducer'

class Auth extends Component{
    constructor(){
        super()

        this.state = {
            username: '',
            password: '',
            newUser: false
        }
    }

    toggleNewUser = () => {
        this.setState({
            newUser: !this.state.newUser
        })
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = async (e) => {
        e.preventDefault()
        const {username, password} = this.state
        try {
            const user = await axios.post('/auth/login', {username, password})
            this.props.loginUser(user.data)
            this.props.history.push('/dashboard')
        }
        catch(err)
        {alert(err.response.request.response)}
    }

    register = async (e) => {
        e.preventDefault()
        const {username, password} = this.state
        try {
            const user = await axios.post('/auth/register', {username, password})
            this.props.loginUser(user.data)
            this.props.history.push('/dashboard')
        }
        catch(err)
        {
            alert(err.response.request.response)
        }
    }

    render(){
        const {username, password} = this.state
        return(<div className='login'> 
                <h1>Helo</h1>
            {this.state.newUser ?
            <div>
                <form onSubmit={e => this.register(e)} >
                    <h4>Username:</h4>
                <input 
                name='username'
                value={username}
                onChange={e => this.changeHandler(e)}
                />
                <h4>Password:</h4>
                <input 
                name='password'
                value={password}
                onChange={e => this.changeHandler(e)}/>
                </form>
                <button className='register-button'>Register</button>
                </div>
                :
                <div>
                <form onSubmit={e => this.state.login(e)}>
                    <h4>Username:</h4>
                <input 
                name='username'
                value={username}
                onChange={e => this.changeHandler(e)}
                />
                <h4>Password:</h4>
                <input 
                name='password'
                value={password}
                onChange={e => this.changeHandler(e)}/>
                </form>
                <button className='login-button'>Login</button>
            </div>
            }
            </div>
        )
    }
}

const mapStateToProps = state => state
export default connect(mapStateToProps, {loginUser})(Auth)