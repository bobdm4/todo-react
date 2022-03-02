import React, { useMemo, useState } from 'react'
import './styles/App.css'
import { PostList } from './components/PostList'
import { PostForm } from './components/PostForm'
import { PostFilter } from './components/PostFilter'
import { MyModal } from './UI/modal/MyModal'
import { MyButton } from './UI/button/MyButton'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JS', body: 'Desk' },
    { id: 2, title: 'pyton ', body: 'Desk' },
    { id: 3, title: 'java', body: 'Desk' },
  ])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  }, [filter.sort, posts])

  const searchedAndsortedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])

  const createPost = newPost => {
    setPosts([...posts, newPost])
  }

  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className='App'>
      <MyButton style={{ marginTop: '15px' }} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} setVisible={setModal} />
      </MyModal>

      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList remove={removePost} posts={searchedAndsortedPosts} title='Cписок постов' />
    </div>
  )
}

export default App
