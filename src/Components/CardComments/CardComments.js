import React from 'react'
import FlechaUm from '../../Assets/cima.svg'
import FlechaDois from '../../Assets/baixo.svg'
import { ContainerPost, IconesUm, Container, Post, Icones, Dados, User, Text } from './Styled'

const CardComments = (props) => {

    const commentsCard = props.comments.map((comment) => {
        return (

            <Container key={comment.id}>
                <User>Enviado por: {comment.username} </User>
                <Text> {comment.body} </Text>
                <Icones>
                    <IconesUm>
                        <button onClick={() => props.voteLike(comment.id)}>
                            <img src={FlechaUm} alt="ícone flecha" />
                        </button>
                        <p>{comment.voteSum}</p>
                        <button onClick={() => props.voteDislike(comment.id)}>
                            <img src={FlechaDois} alt="ícone flecha" />
                        </button>
                    </IconesUm>
                </Icones>
            </Container>
        )
    })

    return (
        <ContainerPost>
            {commentsCard}
        </ContainerPost>
    )
}

export default CardComments