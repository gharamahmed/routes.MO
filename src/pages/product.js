import { Button } from "react-bootstrap";
import {  useNavigate } from "react-router-dom";

export default function Product(){
    const navigate=useNavigate();
    const navhand=(page)=>{
        navigate(`/product/${page}`,{state:{name:"gharem",age:"22"}})
    }
    return(
        <div>
            Product details
            <Button variant="info" onClick={()=>navhand(50)}>
                50
            </Button>
            <Button variant="info" onClick={()=>navhand(100)}>
                100
            </Button>
            <Button variant="info" onClick={()=>navhand(150)}>
                150
            </Button>
            <Button variant="info" onClick={()=>navhand(200)}>
                200
            </Button>
        </div>
    )
}