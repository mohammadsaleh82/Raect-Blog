import React from 'react'
import './Single.css'
import Sidbar from '../../Components/Sidbar/Sidbar'
import SinglePost from '../../Components/SinglePost/SinglePost'
const Single = () => {
    return (
        <div className='Single'>
            <SinglePost />
            <Sidbar />
        </div>
    )
}

export default Single