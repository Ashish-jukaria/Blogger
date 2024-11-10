import React, { useState } from 'react'
import './Styling/Creation.css'
import Body from './Body';

export default function Creation({createblog,setcreateBlog}) {
  

    
  function handleChange(e){
      const {name,value}=e.target
      setcreateBlog({...createblog,[name]:value})
  }
   

    
  return (
    <div id='creationmain'> 
        <div className='creationtitle'>
            <label>Title</label>
        <input maxLength={20}  className='creationinput' name="title" onChange={handleChange}/>

        </div>
        <div className='creationdescription' >
        <label>Description</label>

        <input className='creationinput' maxLength={40} name="description" onChange={handleChange}/>

        </div>
        <div className='creationbody'>

        <label>Body</label>
        <Body name={'body'} value={'Write Here'} onChange={handleChange} />
        </div>

        <div className='creationimage'>
        <label>Image</label>

        <input className='creationinput' name="image" onChange={handleChange}/>

        </div> 
    
    </div>
  )
}
