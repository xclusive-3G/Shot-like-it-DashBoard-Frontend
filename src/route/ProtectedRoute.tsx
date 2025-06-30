import { Navigate } from "react-router-dom";
import DashboardLayout from "./DashboardLayout";
interface ProtectedRoute{
    children:React.ReactNode
}

function ProtectedRoute({children}:any){
    const token = localStorage.getItem('access_token')
    return token ? children: <Navigate to='/dashboard'/>
}

export default ProtectedRoute

