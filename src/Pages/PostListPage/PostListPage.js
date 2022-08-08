import React from 'react'
import { BASE_URL } from '../../Constants/urls'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import { useRequestData } from '../../Hooks/useRequestData'
import Card from '../../Components/CardPost/Card'
import { useForm } from '../../Hooks/useForm'
import { createPost } from '../../Services/Posts'
import { useState } from 'react'
import LoadingLogin from '../../Assets/loadinglogin.gif'
import Loading from '../../Components/Loading/Loading'
import Line from '../../Assets/Line.svg'
import { ContainerForm, Inputs, InputUm, InputDois, ButtonForm, DivLine } from './Styled'
import axios from 'axios'

const PostListPage = () => {
  useProtectedPage()
  const [refresh, setRefresh] = useState(false)
  const [like, setLike] = useState(false)
  const [dislike, setDislike] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const posts = useRequestData([], `${BASE_URL}/posts?size=500`, refresh)
  const { form, onChange, cleanFields } = useForm({ title: "", body: "" })

  const onSubmitForm = (event) => {
    event.preventDefault()
    createPost(form, cleanFields, setRefresh, refresh, setIsLoading)
  }

  const voteLike = (id) => {
    if (like === true) {
      voteRemove(setLike, like, id)
      setLike(!like)
    } else {
      const body = { direction: 1 }
      axios.post(`${BASE_URL}/posts/${id}/votes`, body, {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }).then((res) => {
        setLike(!like)
        setRefresh(!refresh)
      }).catch((err) => {
        console.log(err.response)
      })
    }
  }

  const voteDislike = (id) => {
    if (dislike === true) {
      voteRemove(setDislike, dislike, id)
      setDislike(!dislike)
    } else {
      const body = { direction: -1 }
      axios.put(`${BASE_URL}/posts/${id}/votes`, body, {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
        .then((res) => {
          setDislike(!dislike)
          setRefresh(!refresh)
        })
        .catch((err) => {
          alert(err.response)
        })
    }
  }

  const voteRemove = (setVote, voteName, id) => {
    axios.delete(`${BASE_URL}/posts/${id}/votes`, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
      .then((res) => {
        setVote(!voteName)
        setRefresh(!refresh)
      })
      .catch((err) => {
        alert(err.response.data)
      })
  }

  return (
    <div>
      {posts.length > 0 ?
        <>
          <ContainerForm onSubmit={onSubmitForm}>
            <Inputs>
              <InputUm
                name="title"
                type="text"
                onChange={onChange}
                value={form.title}
                placeholder="Título do post"
                required
              />
              <InputDois
                name="body"
                type="text"
                onChange={onChange}
                value={form.body}
                placeholder="Escreva seu post..."
                required
              />
            </Inputs>
            <ButtonForm>
              <button type="submit">
                {isLoading ? <img width={'30px'} src={LoadingLogin} alt="gif carregando" /> : <>Postar</>}
              </button>
            </ButtonForm>
          </ContainerForm>
          <DivLine>
            <img src={Line} alt="linha" />
          </DivLine>
          <Card posts={posts} voteLike={voteLike} voteDislike={voteDislike} />
        </>
        : <Loading />
      }
    </div>
  )
}

export default PostListPage