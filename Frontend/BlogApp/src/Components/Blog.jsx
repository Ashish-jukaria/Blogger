import useFetch from './Hooks/useFetch'
import BlogCard from './BlogCard'

export default function Blog() {
  const {data,loading}=useFetch('http://localhost:3000/getallBlogs')
  const final_data=(data && data.response && data.response.length>0 && data.response.map((item)=>{
    return(
       <>
        <BlogCard item={item}/>
        </>
    )
  }))


  return (
    <div id='homemain'>
      {loading ? <h1>Loading...</h1> : final_data}
    </div>
  )
}
