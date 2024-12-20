import useFetch from './Hooks/useFetch'
import BlogCard from './BlogCard'
import { useState } from 'react'
import Read from './Read'
import Loading from './Loading'
import {AnimatePresence, motion} from 'motion/react'

export default function Blog() {
  const [readblog,setReadBlog]=useState('')
  const [read,setRead]=useState(false)
  function handleClick(blog){
    setReadBlog(blog)
    setRead(!read)

  }
  const {data,loading}=useFetch('https://blogger-c93i.onrender.com/getallBlogs')
  const final_data=(data && data.response && data.response.length>0 && data.response.map((item)=>{
    return(
      
        <BlogCard  key={item._id} onClick ={()=>handleClick(item)} item={item}/>
    )
  }))


  return (
<>
<AnimatePresence>
{read && <Read setRead={setRead} blog={readblog}/>}
</AnimatePresence>

    <div id='homemain'>
      {loading ? <Loading/> : final_data}
    </div>
    </>

  )
}
