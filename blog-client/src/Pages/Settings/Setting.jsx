import React from 'react'
import Sidbar from '../../Components/Sidbar/Sidbar'
import './Setting.css'
const Setting = () => {
    const ChangePic=(e)=>{
        if(e){
         const fileReader = new FileReader();
         fileReader.readAsDataURL(e);
         fileReader.addEventListener("load", function () {
           document.getElementById('imgWrite').setAttribute('src',this.result)
         })
        }
       }
    return (
        <div className='Setting'>
        <section className="settingmain">
           <div className="Settinglabels">
           <label className='DeleteLabel' >حذف حساب</label>
            <label className='EditLable' >ویرایش حساب</label>
           </div>
            <div className="settingPP">
                <img id='imgWrite' src="./assests/img/me.jpg" alt="" />
                <label htmlFor="imgInput">
                <i className="fa-solid fa-user-large"></i>
                </label>
                <input onChange={e=>ChangePic(e.target.files[0])} type="file" name="" style={{display:'none'}} accept={'image/jpeg ,.png'} id="imgInput" />
            </div>
            <div className="SettingInfo">
                <label htmlFor="Settingusername">نام کاربری</label>
                <input type="text" name="" id="Settingusername" placeholder='نام کاربری' />
                <label htmlFor="SettingEmail">ایمیل</label>
                <input type="email" id="SettingEmail" placeholder='MohammadSaleh.8356@gmail.com' />
                <label htmlFor="SettingPAssword">رمز عبور</label>
                <input type={'password'} id='SettingPAssword' />
                <button>ویرایش</button>
            </div>
        </section>
        <Sidbar/>
        </div>
    
    )
}

export default Setting