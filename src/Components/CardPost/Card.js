import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToPostDetailPage } from '../../Routes/Coordinator'
import { Post, ContainerPost, IconesUm, Comentarios, User, Text, Icones, Container, Dados } from './Styled'
import Comentario from '../../Assets/comentarios.svg'
import FlechaUm from '../../Assets/cima.svg'
import FlechaDois from '../../Assets/baixo.svg'
const Card = (props) => {
    const navigate = useNavigate()

    const goTo = ( id) => {
        goToPostDetailPage(navigate, id)
    }

    const postCard = props.posts.map((post) => {
        return (
            <Container key={post.id}>
                <User>Enviado por: {post.username} </User>
                <Text> {post.body} </Text>
                <Icones>
                <IconesUm>
                    <button onClick={() => props.voteLike(post.id)}>
                        <img src={FlechaUm} alt="ícone flecha" />
                    </button>
                    <p>  {post.voteSum} </p>
                    <button onClick={() => props.voteDislike(post.id)}>
                        <img src={FlechaDois} alt="ícone flecha" />
                    </button>
                </IconesUm>
                <Comentarios onClick={() => goTo(post.id)}>
                    <img src={Comentario} alt="ícone comentarios" />
                    <p>{post.commentCount}</p>
                </Comentarios>
                </Icones>
            </Container>
        )
    })



    return (
        <ContainerPost>{postCard}</ContainerPost>
    )
}

export default Card