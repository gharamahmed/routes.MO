import { Button } from "react-bootstrap";

export default function Login(){
    const loginHand = ()=>{
        localStorage.setItem(
            "token",
            "gharamahmedinreact.js"
        );
        window.location.href='/login';
    };
    return(
        <Button onClick={()=>loginHand()}>login</Button>
    )
}