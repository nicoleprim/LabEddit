export const goToPostListPage = (navigate) => {
    navigate("/")
}

export const goBack = (navigate) => {
    navigate(-1)
}

export const goToLoginPage = (navigate) => {
    navigate("/login")
}

export const goToPostDetailPage = (navigate, id) => {
    navigate(`/postdetailpage/${id}`)
}

export const goToSignUpPage = (navigate) => {
    navigate("/signup")
}