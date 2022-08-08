import {useNavigate} from "react-router-dom"
import {useLayoutEffect} from "react"
import { goToPostListPage } from '../Routes/Coordinator'

export function useUnprotectedPage() {
    const navigate = useNavigate()

    useLayoutEffect(() => {
        const token = localStorage.getItem("token")

        if (token) {
            goToPostListPage(navigate)
        }
    }, [navigate])
}