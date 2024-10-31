import React from 'react'
import './Styling/Blog.css'


export default function BlogCard({item}) {
  return (
    <div className='blogs' key={item._id}>
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


 </div>
      
  )
}
