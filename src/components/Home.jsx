import { useAuth } from "../Context/AuthContext"
import { Link } from "react-router-dom"

export default function Home() {
    const { user, logout } = useAuth()

    return (
        <div className="home-container">
            <div className="home-content">
                <div className="header">
                    <h1>Welcome to Home Page</h1>
                    {user ? (
                        <button onClick={logout} className="btn logout">
                            Log Out
                        </button>
                    ) : (
                        <div className="auth-buttons">
                            <Link to="/signup" className="btn primary">
                                Sign Up
                            </Link>
                            <Link to="/login" className="btn secondary">
                                Log In
                            </Link>
                        </div>
                    )}
                </div>

                {user ? (
                    <div className="profile-card">
                        <h2>Your Profile</h2>
                        <p>Email: {user.email}</p>
                    </div>
                ) : (
                    <div className="welcome-message">
                        <h2>Please sign up or log in to continue</h2>
                    </div>
                )}
            </div>
        </div>
    )
}

