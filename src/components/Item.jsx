import React, {useContext} from "react";
import { CartContext } from "../context/Cart";

const Item = (props) => {
    const cart = useContext(CartContext)

    return(
        <div className='Item'>
            {props.name}: ${props.price}
            <button onClick={() => cart.setItems([
                ...cart.items,
                {item: props.name, price: Number(props.price)}
                ])}>Add to Cart</button>
        </div>
    )
}

export default Item