import { useState } from "react"

const Login = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const submitForm = () => {
        console.log(userName)
        console.log(password)
    }
    return (
        <div className="login-comp-container">
            <div className="login-element">
                <h1>LOGIN</h1>
                <div>Email</div>
                <input onChange={(e) => setUserName(e.target.value)} value={userName} type="email" />
                <div>Password</div>
                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" />
                <div>
                    <button onClick={() => { submitForm() }}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login