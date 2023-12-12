import React from 'react'
import './page.module.css'

function Loader() {
  return (
    <div className='App-content' style={{backgroundColor:"red"}}>
        <div className='App-content-loader'>
            <span className='loading_text'>
                Keep     
            </span>
            &nbsp;&nbsp;
            <div className='meter'>
                <img className='rotated-image' src='/pen.jpeg' alt="" />
            </div>
            &nbsp;&nbsp;
            <span className='loading_text'>
                Patience 
            </span>
        </div>
    </div>
  )
}

export default Loader