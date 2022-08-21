import React from 'react'
import './Register.css'
const Register = () => {
  return (
    <div className='Register'>
        <label >ثبت نام</label>
        <form  className="RegisterForm">
            <label >نام کاربری</label>
            <input type="email" placeholder='نام کاربری' className='RegisterInput'/>
            <label >ایمیل</label>
            <input type="email" placeholder='ایمیل' className='RegisterInput'/>
            <label >رمز ورود</label>
            <input type="password" className='RegisterInput' placeholder='رمز ورود'/>
            <button className='Registerbtn'>ورود</button>
        </form>
        <button className='Loginbtn'>ورود</button>
    </div>
  )
}

export default Register