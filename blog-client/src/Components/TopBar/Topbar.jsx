import React from 'react'
import './Topbar.css'
const Topbar = () => {
  return (
    <div className='top'>
        <div className='top-right' >
            <i className="topsearch fa-solid fa-magnifying-glass"></i>
            <img className='topimg' src="./assests/img/me.jpg" alt="پرو فایل" />
        </div>
        
        <div className='top-center' >
            <ul className="topList">
                <li className="topListitem">خانه</li>
                <li className="topListitem">درباره</li>
                <li className="topListitem">تماس با ما</li>
                <li className="topListitem">افزودن مقاله</li>
                <li className="topListitem">خروج</li>
            </ul>
        </div>
        
        <div className='top-left' >
        <i className="topicon fa-brands fa-facebook"></i>
        <i className="topicon fa-brands fa-square-twitter"></i>
        <i className="topicon fa-brands fa-instagram"></i>
        </div>
    </div>
  )
}

export default Topbar

