import { Button } from "antd"
import { useAuth } from "../context/auth-context"


export default function Home(){


    const { user, logIn, logOut} = useAuth()

    
    const handleClick = ()=>{

        if(!user) { logIn({ email:"test@test.com", password:"test123" }); return }

        logOut()
    }

    return ( <>
    
        <Button onClick={handleClick}> { user ? "Log Out" : "Log In" }  </Button>
        <br/>
        {user ? <p> {JSON.stringify(user, null,2)}</p> : "Log In Please" }
    
    </> ) 
}