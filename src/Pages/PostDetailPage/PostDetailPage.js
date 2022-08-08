import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../Constants/urls'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import { useRequestData } from '../../Hooks/useRequestData'
import CardComments from '../../Components/CardComments/CardComments'
import { useForm } from '../../Hooks/useForm'
import { createComment } from '../../Services/Posts'
import LoadingLogin from '../../Assets/loadinglogin.gif'
import Loading from '../../Components/Loading/Loading'
import { Post, User, Text, Icones, IconesUm, Comentarios, Dados } from '../../Components/CardPost/Styled'
import Comentario from '../../Assets/comentarios.svg'
import FlechaUm from '../../Assets/cima.svg'
import FlechaDois from '../../Assets/baixo.svg'
import { Container } from './Styled'
import Line from '../../Assets/Line.svg'
import { ContainerForm, ContainerPost, Inputs, InputDois, ButtonForm, DivLine } from './Styled'
import axios from 'axios'

const PostDetailPage = () => {
  useProtectedPage()
  const params = useParams()
  const [refresh, setRefresh] = useState(false)
  const [like, setLike] = useState(false)
  const [dislike, setDislike] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const comments = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`, refresh)
  const { form, onChange, cleanFields } = useForm({ body: "" })
  const posts = useRequestData([], `${BASE_URL}/posts`, refresh)

  const onSubmitForm = (event) => {
    event.preventDefault()
    createComment(form, params.id, cleanFields, setRefresh, refresh, setIsLoading)
  }

  const voteLike = (id) => {
    if (like === true) {
      voteRemove(setLike, like, id)
      setLike(!like)
    } else {
      const body = { direction: 1 }
      axios.post(`${BASE_URL}/comments/${id}/votes`, body, {
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
      axios.put(`${BASE_URL}/comments/${id}/votes`, body, {
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
    axios.delete(`${BASE_URL}/comments/${id}/votes`, {
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

  const getPost = posts.map((post) => {
    if (post.id === params.id) {
      return (
        <ContainerPost>
        <Container>
          <User>Enviado por: {post.username} </User>
          <Text> {post.body} </Text>
          <Icones>
            <IconesUm>
              <img src={FlechaUm} alt="ícone flecha" />
              <p>{post.voteSum} </p>
              <img src={FlechaDois} alt="ícone flecha" />
            </IconesUm>
            <Comentarios> <img src={Comentario} alt="ícone comentarios" />  <p>{post.commentCount}</p> </Comentarios>
          </Icones>
        </Container>
      </ContainerPost>
      )
    }else {
      return (<div key={post.id}></div>)
    }
  })

  return (
    <>
      {comments ?
        <>
        {getPost}
          <ContainerForm onSubmit={onSubmitForm}>
            <Inputs>
              <InputDois
                name="body"
                type="text"
                onChange={onChange}
                value={form.body}
                placeholder="Adicionar comentário"
                required
              />
            </Inputs>
            <ButtonForm>
              <button type="submit">
                {isLoading ? <img width={'30px'} src={LoadingLogin} alt="gif carregando" /> : <>Responder</>}
              </button>
            </ButtonForm>
          </ContainerForm>
          <DivLine>
            <img src={Line} alt="linha" />
          </DivLine>
          <CardComments comments={comments} voteLike={voteLike} voteDislike={voteDislike} />
        </>
        : <Loading />
      }
    </>
  )
}

export default PostDetailPage