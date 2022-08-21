import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='Header'>
            <div className="headerTitles">
                <span className='headerTitlesm'>محمد صالح انجم شعاع</span>
                <span className='headerTitlelg'>وبلاگ</span>
            </div>
            <img src="./assests/img/nature2.jpg" alt="" className="heaederimg" />
        </div>
    )
}

export default Header