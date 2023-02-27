import axios  from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import defaultValues from '../utils/defaultValues';
import './styles/login.css'
const LoginPage = () => {

const [token, setToken] = useState()

    const {register,handleSubmit,reset}= useForm()

    const submit=(data)=>{
        console.log(data);
        const url =
            "https://e-commerce-api-v2.academlo.tech/api/v1/users/login";
        axios.post(url,data)
            .then(res=>{
                
                console.log(res.data)
                setToken(res.data.token)
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('name', `${res.data.user.firstName} ${res.data.user.lastName}`)
            })
            .catch(err=>{
                console.log(err)
                localStorage.clear()
            })
        reset(defaultValues)
    }
    const handleClick=()=>{
        localStorage.clear()
        setToken()
    }

    if(localStorage.getItem('name')){
        return (
            <div className="logout">
                <div className="logout__container">
                    <i className="bx bxs-user-circle"></i>
                    <h2 className="logout__title">
                        {localStorage.getItem("name")}
                    </h2>
                    <button className="logout__btn" onClick={handleClick}>
                        <Link to="/user/login"> Logout</Link>
                    </button>
                </div>
            </div>
        );
    }
    else{
    return (
        <div className="login__container">
            <div className="login__page">
                <form className="login__form" onSubmit={handleSubmit(submit)}>
                    <h3 className="login__form-title">
                        Welcome! Enter your email and password to continue
                    </h3>
                    <div className="login__test">
                        <h3 className="login__test-title">Test Data</h3>
                        <p className="login__data">
                            <i className="bx bx-envelope"></i>
                            vanessa@gmail.com
                        </p>
                        <p className="login__data">
                            <i className="bx bx-lock-alt"></i>
                            vane1234
                        </p>
                    </div>
                    <div className="login__form-info">
                        <label className="login__form-req" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="login__form-input"
                            {...register("email")}
                            type="email"
                            id="email"
                        />
                    </div>
                    <div className="login__form-info">
                        <label className="login__form-req" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="login__form-input"
                            {...register("password")}
                            type="password"
                            id="password"
                        />
                    </div>
                    <button className="login__form-btn">Login</button>
                </form>
                <div className='login__form-reg'>
                    Don't have an account?
                    <Link to="/user/register"> Sign up</Link>
                </div>
            </div>
        </div>
    );
}
}

export default LoginPage