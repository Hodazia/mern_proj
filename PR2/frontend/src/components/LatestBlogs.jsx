import React, { useContext } from 'react'

import BlogCard from './BlogCard'
import { StoreContext } from '../context/StoreContext'


const LatestBlogs = () => {
  const blogData = useContext(StoreContext)
  return (
    <div>
      <h1 className='text-3xl font-bold text-center sm:text-start'>LatestBlogs</h1>
      <div className="grid my-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-3 sm:px-4">
        {blogData.slice(-4).reverse().map((blog, index) => (
          <BlogCard
            key={index}
            id={blog.id}
            title={blog.title}
            image={blog.image}
            category={blog.category}
            author_name={blog.author.name}
            author_image={blog.author.image}
            date={blog.date}
          />
        ))}
      </div>  
    </div>
  )
}

export default LatestBlogs
