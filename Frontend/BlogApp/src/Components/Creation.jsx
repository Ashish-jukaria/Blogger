import React, { useState } from 'react'
import './Styling/Creation.css'

export default function Creation({createblog,setcreateBlog}) {

    
  function handleChange(e){
      const {name,value}=e.target
      setcreateBlog({...createblog,[name]:value})
  }
   

    
  return (
    <div id='creationmain'> 
        <div className='creationtitle'>
            <label>Title</label>
        <input className='creationinput' name="title" onChange={handleChange}/>

        </div>
        <div className='creationdescription' >
        <label>Description</label>

        <input className='creationinput' name="description" onChange={handleChange}/>

        </div>
        <div className='creationbody'>
        <label>Body</label>

        <input className='creationinput' name="body" onChange={handleChange}/>

        </div>
        <div className='creationimage'>
        <label>Image</label>

        <input className='creationinput' name="image" onChange={handleChange}/>

        </div> 
    
    </div>
  )
}
