import React, { useState } from 'react'
import axios from 'axios'


const PostCreate = ({ setAddedPost }) => {
    const [title, setTitle] = useState('')


    const handleSubmit = async (event) => {
        setAddedPost(true)
        event.preventDefault()
        await axios.post('http://localhost:4000/posts', {
            title
        }).then(res => { setAddedPost(false) })
        setTitle('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Title</label>
                    <input className='form-control' value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <button style={{ marginTop: "10px" }} className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
}

export default PostCreate