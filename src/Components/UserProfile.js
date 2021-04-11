import React from 'react';
import './UserProfile.css';

const postInfo = {
    name: "Jordan Walke",
    title: 'React Creator',
    imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNz9LVRQcD1prZABAXFJJFckrdcz-D2Xplcw&usqp=CAU",
    description: "Lorem Ipsem"
  };


function UserProfile(){
    return (
        <div className='UserProfile'>
            <img src={postInfo.imageLink} alt='image' width='200' height='200'></img>
            <p>{postInfo.name}</p>
            <p>{postInfo.title}</p>
            <p>{postInfo.description}</p>
        </div>
        
    );
}
export default UserProfile;