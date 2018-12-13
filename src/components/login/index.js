import React, { Component } from 'react'
import { Input, Button } from '../globals'
import './Login.scss'

class Login extends Component {
    render () {
        return (
            <form className="login">
                <Input type="text" label="Username" id="username" />
                <Input type="password" label="Password" id="password" />
                <Button className="primary" label="Log in" />
            </form>
        )
    }
}

export default Login
