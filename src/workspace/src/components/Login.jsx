import { useEffect, useState } from "react"
import { login } from "../api/api"
import {  useNavigate } from "react-router-dom"


function Login() {
    const navigate = useNavigate()
    const handleLogin = () => {
        const token = login()
        sessionStorage.setItem("token", token)
        navigate("/app/game")
    }
    return (
        <>
            <input type="text" />
            <input type="password" name="" id="" />

            <button onClick={() => handleLogin()}>ログイン</button>        </>
    )
}
export default Login