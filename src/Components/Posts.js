import React from 'react';
import Post from './Post';
import './Posts.css';


function Posts (){
    return(
        <div className='Posts'>
            <strong> Posts </strong>
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default Posts;