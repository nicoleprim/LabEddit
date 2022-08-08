import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from '../Pages/LoginPage/LoginPage'
import PostDetailPage from "../Pages/PostDetailPage/PostDetailPage";
import PostListPage from "../Pages/PostListPage/PostListPage";
import SignUpPage from "../Pages/SignUpPage/SignUpPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Header from "../Components/Header/Header";

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/postlistpage/:number" element={<PostListPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/postdetailpage/:id" element={<PostDetailPage />} />
                <Route index exact path="/" element={<PostListPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router