import React from 'react'
import './Styling/Read.css'
import { easeInOut, motion } from "motion/react"

export default function Read({ setRead, blog }) {
    console.log(blog)
  return (
    <motion.div initial={{scale:0,opacity:0}} animate={{scale:1,opacity:1}} exit={{opacity:0,scale:0 ,transition:{duration:0.5}}} transition={{ease:easeInOut,duration:0.5}}  className='readmain1'>
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

    </motion.div>
  )
}
