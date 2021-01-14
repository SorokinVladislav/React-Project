import React from 'react'
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    return (<div className={s.postsBlock}>
           <h3> My posts</h3>
            <div>
                <div>
            <textarea>
            </textarea>
                </div>
                <button>App post</button>
            </div>

            <div className={s.posts}>
                <Post message='Hi, how are you?' likes="5"/>
                <Post message="It's my first post" likes="15"/>

            </div>

        </div>


    )
};
export default MyPosts;