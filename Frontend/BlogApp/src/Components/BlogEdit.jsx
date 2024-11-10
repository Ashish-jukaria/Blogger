import React from 'react'
import './Styling/BlogEdit.css'
import Body from './Body'

export default function BlogEdit({editblogid,setBody,setImage,settitle,setDescription,handleEdit,blog}) {
  return (
    <div id='blogeditmain'>
        <div className='blogeditimage'>
        <label className='label'>Image</label>
        <input className='input' defaultValue={blog.image} onChange={(e)=>(setImage(e.target.value))}></input>
      </div>
      <div className='blogeditbody'>
        <label className='label'>Body</label>
        <Body value={blog.body} name={'body'} onChange={(e)=>(setBody(e.target.value))}/>
      </div>
      <div className='blogedittitle'>
        <label className='label'>Title</label>
        <input maxLength={20} className='input' defaultValue={blog.title} onChange={(e)=>(settitle(e.target.value))}></input>
      </div>
      <div className='blogeditdescription'>
        <label className='label'>Description</label>
        <input maxLength={40} className='input' defaultValue={blog.description} onChange={(e)=>(setDescription(e.target.value))}></input>
      </div>
      <div>
      <button className='editblogconformbutton' onClick={() => handleEdit(blog)}>Confirm</button>

      </div>
    </div>
  )
}
