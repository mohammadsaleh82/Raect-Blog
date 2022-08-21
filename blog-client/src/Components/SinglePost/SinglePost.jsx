import React from 'react'
import './SinglePost.css'
const SinglePost = () => {
    return (
        <div className='SinglePost'>
            <div className="singlePostWrapper">
                <img src="./assests/img/nature.jpg" className='singleimg' alt="" />
                <h1 className='singletitle'>
                    محمد صالح
                    <div className="singelEdit">
                        <i className="singleposticon fa-solid fa-file-pen"></i>
                        <i className="singleposticon fa-solid fa-trash"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className='singlePostAuthor'>نویسنده:<b>  محمد صالح</b></span>
                    <span className='singlePostDate'>5 ساعت پیش</span>
                </div>
                <p className="singlePostDesc">
                    لورم ایپسوم متن ساختگی با تولید سادگی نام
                    فهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و ک
                    لورم ایپسوم متن ساختگی با تولید سادگی نامف
                    هوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                    مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربر
                    دهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد
                    گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شن
                    اخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
                    فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه ر
                    اهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
                    اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    اربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای   مید داشت که تمام
                </p>
            </div>
        </div>
    )
}

export default SinglePost