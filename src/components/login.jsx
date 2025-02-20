"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../Context/AuthContext"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const { login, loginWithGoogle } = useAuth()

    async function handleSubmit(e) {
        e.preventDefault()
        setError("")
        setLoading(true)

        try {
            await login(email, password)
        } catch (err) {
            setError("Failed to log in")
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    async function handleGoogleSignIn() {
        setError("")
        setLoading(true)
        try {
            await loginWithGoogle()
        } catch (err) {
            setError("Failed to sign in with Google")
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Log In</h2>
                {error && <div className="error-message">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={loading}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={loading}
                        />
                    </div>
                    <button type="submit" className="btn primary" disabled={loading}>
                        {loading ? "Logging in..." : "Log In"}
                    </button>
                </form>
                <div className="divider">or</div>
                <button onClick={handleGoogleSignIn} className="btn google" disabled={loading}>
                    Log in with Google
                </button>
                <div className="auth-link">
                    Don't Have an account? <Link to="/signup">Sign Up</Link>
                </div>
            </div>
        </div>
    )
}

