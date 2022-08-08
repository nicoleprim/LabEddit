import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Form, InputUm, InputDois, Inputs } from '../LoginPage/Styled'
import { useForm } from '../../Hooks/useForm'
import { BASE_URL } from '../../Constants/urls'
import { goToPostListPage } from '../../Routes/Coordinator'
import { InputTres, DivTitulo, Check, DivP, ButtonForm } from './Styled'
import {useUnprotectedPage} from '../../Hooks/useUnprotectedPage'
import { signUp } from '../../Services/User'
import { useState } from 'react'
import LoadingLogin from '../../Assets/loadinglogin.gif'

const SignUpPage = () => {
  useUnprotectedPage()
  const { form, onChange, cleanFields } = useForm({username: "", email: "", password: "" })
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const onSubmitForm = (event) => {
    event.preventDefault()
    signUp(form, cleanFields, navigate, setIsLoading)
  }


  return (
    <>
      <DivTitulo>
        <h2>Olá, boas vindas ao LabEddit ;)</h2>
      </DivTitulo>
      <Form onSubmit={onSubmitForm}>
        <Inputs>
        <InputTres
            name="username"
            type="text"
            onChange={onChange}
            value={form.username}
            placeholder="Nome de usuário *"
            required
          />
          <InputUm
            name="email"
            type="email"
            onChange={onChange}
            value={form.email}
            placeholder="E-mail *"
            required
          />
          <InputDois
            name="password"
            type="password"
            onChange={onChange}
            value={form.password}
            placeholder="Senha *"
            pattern={'^.{8,30}'}
            title={"A senha deve conter no mínimo 8 e no máximo 30 caracteres"}
            required
          />
        </Inputs>
        <DivP>
        <p>Ao continuar, você concorda com o nosso <a href="http://www.google.com.br">Contrato de Usuário</a> e nossa <a href="http://www.google.com.br">Política de Privacidade </a>.</p>
        <Check>
        <input type="checkbox"/>
        <p>Eu concordo em receber emails sobre coisas legais no LabEddit</p>
        </Check>
        </DivP>
        <ButtonForm>
          <button type="submit">
          {isLoading? <img width={'30px'} src={LoadingLogin} alt="gif carregando"/> : <>Cadastrar</>}
            
            </button>
        </ButtonForm>
      </Form>
    </>
  )
}

export default SignUpPage