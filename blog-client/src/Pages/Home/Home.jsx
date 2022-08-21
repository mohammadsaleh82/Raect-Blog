import React from 'react'
import Header from '../../Components/Header/Header'
import Posts from '../../Components/Posts/Posts'
import Sidbar from '../../Components/Sidbar/Sidbar'
import './Home.css'

const Home = () => {
  return (<>
    <Header />
    <div className='Home'>
      <Posts />
      <Sidbar />
    </div>
  </>
  )
}
export default Home;
