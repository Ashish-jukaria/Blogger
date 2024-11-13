import React from 'react'
import './Styling/Blog.css'
import { AnimatePresence, easeInOut, motion } from "motion/react"

export default function BlogCard({onClick,item}) {

  return (

    <motion.div drag whileDrag={{scale:1.4 ,background:'#00000',zIndex:9999}} whileInView={{scale:1,opacity:1 ,transition:{duration:0.3}}} initial={{scale:0, opacity:0}}  whileHover={{
      scale:1.02,
      transition:{duration:0.01,ease:easeInOut, bounce:1}
    }} exit={{opacity:0}} transition={{ ease: "easeOut", duration: 1 }}  className='blogs' key={item._id} onClick={onClick}>
    <div className='image'>
     <img className='homeimage' src={item.image} alt={item.title || 'Blog post image'} />
   </div>
   <div className='homeinfo'>

   <div className='hometitle'>
     {item.title}
   </div>

   <div className='description'> 
   {item.description}
   </div>
   </div>


 </motion.div>

      
  )
}
