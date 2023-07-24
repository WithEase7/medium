import React from 'react';
import { data } from '../utilities/BlogsData';
import { bookmarkIcon } from '../utilities/SvgIcons';

const RecentBlogs = () => {
  return (
    <div className='blogContainer'>
        <ul className='blogList'>
            {data.map((item, index) => {
                return (
                    <li key={index} className='blogCard'>
                        <div className='blogLeft'>
                            <div className='blogHeader'>
                                <img src={item.author_image} alt='author_image' className='blogAuthorImage'/>
                                <span>{item.author}</span>
                            </div>
                            <h4 className='blogTitle'>{item.title}</h4>
                            <div className='blogFooter'>
                            <p>{item.date} . {item.duration} read</p>
                            <span>{bookmarkIcon}</span>
                            </div>
                        </div>
                        <div className='blogRight'>
                            <img src={item.image} alt='blog_Image' className='blogImage'/>
                        </div>
                    </li>
                )
            })}
        </ul>
        <div className='blogLoadMore'>
        <button>Load more stories</button>
        </div>
    </div>
  )
}

export default RecentBlogs