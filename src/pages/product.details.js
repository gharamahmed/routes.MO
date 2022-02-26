import { useLocation, useParams } from "react-router-dom"

export default function Product_Details(){
    const id=useParams();
    const location=useLocation();
    return(
        <div>
            page:{id.productId}<br/>
            Data:{location.state.name}<br/>
            age:{location.state.age}<br/>
           <img src={location.state.Image}/>
        </div>
    )
}