import { ReactNode } from "react";
import { useAuth }   from "../context/auth-context"
import { Navigate, redirect, useLocation } from "react-router-dom";



export const ProtectedRoute = ({children } : {children: JSX.Element})=>{


        const auth = useAuth() 
        const location = useLocation()



        if (!auth.user) return  <Navigate to={"/login"} state={{from: location}} />

        return (

            children

        )


}