import { useParams } from "react-router-dom"

export default function Product_Details(){
    const id=useParams();
    return(
        <div>
            Product Details{id.productId}
        </div>
    )
}