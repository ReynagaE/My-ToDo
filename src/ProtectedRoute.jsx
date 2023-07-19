import { useAuth } from "./context/AuthContext"
import { Navigate, Outlet } from "react-router-dom"
import instance from "./api/axios"

function ProtectedRoute() {
    instance.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
    const {loading, isAuthenticated} = useAuth()
    console.log(loading, isAuthenticated)

    if (loading) return <h1>
        Loading...
    </h1>
    if (!loading && !isAuthenticated) return <Navigate to='/login' replace />

    instance.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`;

    return <Outlet/>
}

export default ProtectedRoute
