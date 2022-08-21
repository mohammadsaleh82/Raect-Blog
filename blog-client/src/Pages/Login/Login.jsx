import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <div className='Login'>
        <label >ورود</label>
        <form  className="loginForm">
            <label >ایمیل</label>
            <input type="email" placeholder='ایمیل' className='LoginInput'/>
            <label >رمز ورود</label>
            <input type="password" className='LoginInput' placeholder='رمز ورود'/>
            <button className='Loginbtn'>ورود</button>
        </form>
            <button className='Registerbtn'>ثبت نام</button>
    </div>
  )
}

export default Login