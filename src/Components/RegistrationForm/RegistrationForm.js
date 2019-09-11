import React from 'react'
import './RegistrationForm.css'
import { Button, Input, Required } from "../Utils/Utils";

const RegistrationForm = () => {
    
        return (
            <form
                className='RegistrationForm'
            >
                <div className='full_name'>
                    <label htmlFor='RegistrationForm__full_name'>
                        Full name <Required />
                    </label>
                    <Input
                        name='full_name'
                        type='text'
                        required
                        id='RegistrationForm__full_name'>
                    </Input>
                </div>

                <div className='user_name'>
                    <label htmlFor='RegistrationForm__user_name'>
                        User name <Required />
                    </label>
                    <Input
                        name='user_name'
                        type='text'
                        required
                        id='RegistrationForm__user_name'>
                    </Input>
                </div>

                <div className='password'>
                    <label htmlFor='RegistrationForm__password'>
                        Password <Required />
                    </label>
                    <Input
                        name='password'
                        type='password'
                        required
                        id='RegistrationForm__password'>
                    </Input>
                </div>
                
                <Button type='submit'>
                    Register
                </Button>
            </form>
        )
}

export default RegistrationForm
