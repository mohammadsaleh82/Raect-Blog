import React from 'react'
import './Sidbar.css'
const Sidbar = () => {
    return (
        <div className='Sidbar'>
            <div className="sidbaritem">
                <span className='sidbartitle'>درباره من</span>
                <img src="./assests/img/cake.jpg" alt="" />
                <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نام
                    فهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و ک
                    اربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای   مید داشت که تمام و دشواری  اصلی و جواد.
                </p>
            </div>
            <div className="sidbaritem">
                <span className='sidbartitle'>دسته بندی ها</span>
                <ul className="sidbarList">
                    <li className="sidbarListItem">زندگی</li>
                    <li className="sidbarListItem">موزیک</li>
                    <li className="sidbarListItem">حالت</li>
                    <li className="sidbarListItem">ورزش</li>
                    <li className="sidbarListItem">سینما</li>
                </ul>
            </div>
            <div className="sidbaritem">
                <span className='sidbartitle'>دنبال کردن ما</span>
                <div className='sidbarsocial'>
                    <i className="sidbaricon fa-brands fa-whatsapp"></i>
                    <i className="sidbaricon fa-brands fa-telegram"></i>
                    <i className="sidbaricon fa-brands fa-instagram"></i>
                </div>
            </div>
        </div>
    )
}

export default Sidbar