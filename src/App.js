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
import { getPageCount } from './utils/pages'
import { Pagination } from './components/Pagination'

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const searchedAndsortedPosts = usePosts(posts, filter.sort, filter.query)

  const [fetchPosts, isPostsLoading, postsError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })

  useEffect(() => {
    fetchPosts(limit, page)
  }, [])

  const createPost = newPost => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = page => {
    setPage(page)
    fetchPosts(limit, page)
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

      <Pagination totalPages={totalPages} page={page} changePage={changePage} />
    </div>
  )
}

export default App
