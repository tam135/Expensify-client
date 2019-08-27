import React, { Component } from 'react'
import { Button, Input  } from '../../Utils/Utils'
import './LoginForm.css'

export default class LoginForm extends Component {
    render() {
        return (
            <form
                className='LoginForm'
                onSubmit={this.handleSubmitJwtAuth}
            >

                <div className='user_name'>
                    <label htmlFor='LoginForm__user_name'>
                        User name
                    </label>
                    <Input
                        required
                        name='user_name'
                        id='LoginForm__user_name'>
                    </Input>
                </div>

                <div className='password'>
                    <label htmlFor='LoginForm__password'>
                        Password
                    </label>
                    <Input
                        required
                        name='password'
                        type='password'
                        id='LoginForm__password'>
                    </Input>
                </div>
                <Button type='submit'>
                    Login
                </Button>
            </form>
        )
    }
}
