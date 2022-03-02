import React, { useRef, useState } from 'react'
import './styles/App.css'
import { PostList } from './components/PostList'
import { MyButton } from './UI/button/MyButton'
import { MyInput } from './UI/input/MyInput'
import { PostForm } from './components/PostForm'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JS', body: 'Desk' },
    { id: 2, title: 'JS2 ', body: 'Desk' },
    { id: 3, title: 'JS3', body: 'Desk' },
  ])

  const createPost = newPost => {
    setPosts([...posts, newPost])
  }

  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className='App'>
      <PostForm create={createPost} />
      {posts.length ? (
        <PostList remove={removePost} posts={posts} title='Cписок постов' />
      ) : (
        <h1 style={{ textAlighn: 'center' }}>Посты не найдены</h1>
      )}
    </div>
  )
}

export default App
