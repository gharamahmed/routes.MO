import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Product(){
    return(
        <div>
            Product details
            <Button variant="info">
                <Link to={"50"}>ProductDetailes{50}</Link>
            </Button>
            <Button variant="info">
                <Link to={"100"}>ProductDetailes{100}</Link>
            </Button>
            <Button variant="info">
                <Link to={"150"}>ProductDetailes{150}</Link>
            </Button>
            <Button variant="info">
                <Link to={"200"}>ProductDetailes{200}</Link>
            </Button>
        </div>
    )
}