import React from 'react'
import './Write.css'
const Write = () => {
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
            <button type={'submit'} className='WriteSubmit'>ذخیره</button>
        </form>
    </div>
  )
}

export default Write