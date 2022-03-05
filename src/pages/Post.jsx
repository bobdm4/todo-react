import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from './../hooks/useFetching'
import PostService from './../API/PostServise'
import { Loader } from '../UI/loader/Loader'

export const Post = () => {
  const params = useParams()
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  const [fetchPostById, isLoading, error] = useFetching(async id => {
    const response = await PostService.getById(id)
    setPost(response.data)
  })
  const [fetchCommentById, isCommLoading, commError] = useFetching(async id => {
    const response = await PostService.getCommentsById(id)
    setComments(response.data)
  })

  useEffect(() => {
    fetchPostById(params.postId)
    fetchCommentById(params.postId)
  }, [])

  return (
    <div>
      <h1>Страница поста №{params.postId}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <h3>{post.title}</h3>
        </div>
      )}
      {isCommLoading ? (
        <Loader />
      ) : (
        <div>
          <h4 style={{ marginTop: 15 }}>Комментарии</h4>
          {comments.map(comm => (
            <div>
              <h5 style={{ marginTop: 15 }}>{comm.email}</h5>
              <p>{comm.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
