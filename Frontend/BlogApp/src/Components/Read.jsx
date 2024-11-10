import React from 'react'
import './Styling/Read.css'

export default function Read({ setRead, blog }) {
    console.log(blog)
  return (
    <div className='readmain1'>
      <div className='readmain'>


        <div className='readimagediv'>
        <img className='readimage' src={blog.image} alt={blog.title || 'Blog post image'} />
        </div>
        <div className='readtitle'>
        <h1>{blog.title}</h1>

        </div>
        <div>
        <span className='readdescription'>{blog.description}</span>
        </div>
        <div>

        <div className='readbody' dangerouslySetInnerHTML={{ __html: blog.body }} />

        </div>


        <div>
            <button className='readbutton' onClick={()=>setRead(false)}>Shrink</button>
        </div>

       
        </div>

    </div>
  )
}
