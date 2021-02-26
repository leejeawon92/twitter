import React, { useState } from 'react';

const Auth = () =>{
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const onChange = (event) => {
        const {target: {name,value}} = event;
        if(name ==='email'){ 
            setEmail(value)
        }
        else if( name ==='password'){ 
            setPassword(value)
        }
    }

    const onSubmit = (event) => {
        event.preventDefault()
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input name='email' placeholder='Email' required value={email} onChange={onChange}></input>
                <input name='password' placeholder='Password' required value={password} onChange={onChange}></input>
                <input type='submit' placeholder='Log In' required></input>
            </form>
            <div>
                <button>Continue With Google</button>
                <button>Continue With Github</button>
            </div>
        </div>
    )
}
export default Auth