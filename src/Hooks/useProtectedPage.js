import {useNavigate} from "react-router-dom"
import {useEffect} from "react"
import { goToLoginPage } from "../Routes/Coordinator"

export function useProtectedPage() {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")

        if (!token) {
            goToLoginPage(navigate)
        }
    }, [navigate])
}