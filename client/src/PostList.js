import React, { useState, useEffect } from 'react'
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';
const PostList = ({ addedPost }) => {
    const [posts, setPosts] = useState({});

    const fetchData = async () => {
        const result = await axios.get('http://localhost:4000/posts');
        setPosts(result.data);
    }

    useEffect(() => {
        fetchData()
    }, [addedPost])

    const renderedPosts = Object.values(posts).map(post => {
        return (
            <div className='card' style={{ width: '30%', marginBottom: '20px' }} key={post.id}>
                <div className='card-body'>
                    <h3>{post.title}</h3>
                    <CommentList postId={post.id} />
                    <CommentCreate postId={post.id} />
                </div>
            </div>
        )
    })
    return (
        <div>
            <h1>Post List</h1>
            <div className='d-flex flex-row flex-warp justify-content-between '>
                {renderedPosts}
            </div>

        </div>
    )
}

export default PostList