import {useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setblogs] = useState([
        {title: 'my new website', body: 'Some text', author: 'Gus', id: 1},
        {title: 'my second website', body: 'Some text', author: 'Justin', id: 2},
        {title: 'my third website', body: 'Some text', author: 'Gus', id: 3}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setblogs(newBlogs);
    }

    useEffect(() =>{
        console.log('use effect ran')
    });

     return ( 
        <div className="home">
            <h2>Home Page</h2>
         <BlogList blogs={blogs} handleDelete={handleDelete}/>
       
        </div>
      );
}
 
export default Home;