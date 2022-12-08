import PostCreate from './PostCreate'
import PostList from './PostList';
import { useState } from 'react';
function App() {
  const [addedPost, setAddedPost] = useState(false);
  return (
    <div className='container'>
      <h1>Create Post</h1>
      <PostCreate setAddedPost={setAddedPost} />
      <hr />
      <PostList addedPost={addedPost} />
    </div>
  );
}

export default App;
