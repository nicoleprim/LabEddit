import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../Constants/urls'
import axios from 'axios'
import { goToSignUpPage, goToPostListPage } from '../Routes/Coordinator'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export const login = (body, cleanFields, navigate, setIsLoading) => {
  setIsLoading(true)
    axios.post(`${BASE_URL}/users/login`, body)
        .then((response) => {
            localStorage.setItem('token', response.data.token)
            goToPostListPage(navigate)
            cleanFields()
            setIsLoading(false)
        }).catch((error) => {
            setIsLoading(false)
            toast.error("Usuário ou senha inválidos")
            cleanFields()

        })
}

export const signUp = (body, cleanFields, navigate, setIsLoading) => {
  setIsLoading(true)
    axios.post(`${BASE_URL}/users/signup`, body)
      .then((response) => {
        localStorage.setItem('token', response.data.token)
        goToPostListPage(navigate)
        cleanFields()
        setIsLoading(false)
      }).catch((error) => {
        setIsLoading(false)
        toast.error("Tente novamente")
        cleanFields()
      })
  }