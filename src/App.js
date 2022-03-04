import React, { useEffect, useState } from 'react'
import './styles/App.css'
import { PostList } from './components/PostList'
import { PostForm } from './components/PostForm'
import { PostFilter } from './components/PostFilter'
import { MyModal } from './UI/modal/MyModal'
import { MyButton } from './UI/button/MyButton'
import { usePosts } from './hooks/usePost'
import PostService from './API/PostServise'
import { Loader } from './UI/loader/Loader'
import { useFetching } from './hooks/useFetching'

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const searchedAndsortedPosts = usePosts(posts, filter.sort, filter.query)
  const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
    const posts = await PostService.getAll()
    setPosts(posts)
  })

  useEffect(() => {
    fetchPosts()
  }, [])

  const createPost = newPost => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className='App'>
      <MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} setVisible={setModal} />
      </MyModal>

      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postsError && <h1>Произошла ошибка ${postsError}</h1>}
      {isPostsLoading ? <Loader /> : <PostList remove={removePost} posts={searchedAndsortedPosts} title='Cписок постов' />}
    </div>
  )
}

export default App
