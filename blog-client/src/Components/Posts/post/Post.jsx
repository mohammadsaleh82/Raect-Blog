import React from 'react'
import './Post.css'

const Post = () => {
    return (
        <div className='Post'>
            <img src="./assests/img/nature.jpg" alt="" className="postimg" />
            <div className="postinfo">
                <div className="postcats">
                    <span className="postcat">موزیک</span>
                    <span className="postcat">مذهبی</span>
                </div>
                <span className="posttitle">اموزش مداحی</span>
                <hr />
                <span className='postdate'>1 ساعت پیش</span>
            </div>
            <p className="postdesc">
            لورم ایپسوم متن ساختگی با تولید سادگی نام
                    فهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و ک
                    اربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای   مید داشت که تمام 
            </p>
        </div>
    )
}

export default Post