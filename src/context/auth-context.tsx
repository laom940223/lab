import React, { useState} from 'react'



export type User = {

    id: number;
    name : string
    email:string
    role:string
    initials: string
} 


export type LoginCredentials ={
     
    email:string, 
    password: string

}

export type AuthContext = {

    user: User | null,
    logIn: ({email, password} : LoginCredentials) => void
    logOut :  ()=> void
}




const defaultContext = {
    user: null, 
    logIn: (credentials )=>{ 
        
        console.log("Please Replace it")
        return },
    logOut: ()=>{  
        console.log("Please Replace it")
        return  }
} as AuthContext



const AuthContext = React.createContext<AuthContext>( defaultContext)



export const AuthContextProvider = ({children} : {children: React.ReactNode})=>{


    const [user, setUser] = useState<User | null >(null)

    const logIn = ( credentials : LoginCredentials )=>{

        setUser(  { id: 152, email:"test@test.com", name:"Test Name", initials:"TN", role:"ADMIN" })

    }

    const logOut = ()=>{

        setUser(null)
    }


    return (

        <AuthContext.Provider value={ { user, logIn, logOut }} >

            {children}
        </AuthContext.Provider>

    )
}



export const useAuth = ()=>{


    return React.useContext(AuthContext)
}