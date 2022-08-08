import React from 'react'
import LoadingPages from '../../Assets/loading.gif'
import { LoadingStyled } from './Styled'

const Loading = () => {
  return (
      <LoadingStyled>
    <img src={LoadingPages} />
    </LoadingStyled>
  )
}

export default Loading