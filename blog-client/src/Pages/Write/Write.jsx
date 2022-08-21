import React from 'react'
import './Write.css'
const Write = () => {
  const ChangePic=(e)=>{
    console.log(e)
    document.getElementById('imgWrite').src=document.getElementById('imgwriteinput').value
  }
  return (
    <div className='Write'>
     
         <img src="./assests/img/nature.jpg" id='imgWrite' className='imgWrite' alt="" />
        <form  className="writeForm">
            <div className="writeFormGroup">
                <input  type="text" className="inputtitle" placeholder='عنوان' autoFocus={true} />
                <label htmlFor="imgwriteinput">
                <i className="writecion fa-solid fa-plus"></i>
                </label>
                <input onChange={e=>ChangePic(e.target.files[0])} type="file" style={{display:"none"}}  id="imgwriteinput" />
            </div>
            <div className="writeFormGroup">
              <textarea className='inputtext' placeholder='متن پست' cols="30" rows="10"></textarea>
            </div>
        </form>
    </div>
  )
}

export default Write