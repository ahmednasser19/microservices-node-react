import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CommentList = ({ postId }) => {
    const [comments, setComments] = useState([])

    const fetchComments = async () => {
        const result = await axios.get(`http://localhost:4001/posts/${postId}/comments`)
        setComments(result.data)
    }

    useEffect(() => {
        fetchComments()
    }, [])

    const renderedComments = comments.map(comment => {
        return <li key={comment.id}>{comment.content}</li>
    })

    return (
        <ul>
            {renderedComments}
        </ul>
    )
}

export default CommentList