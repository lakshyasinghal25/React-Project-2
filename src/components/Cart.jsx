import React, {useContext} from "react";
import { CartContext } from "../context/Cart";

const Cart = () => {
    const cart = useContext(CartContext)
    const total = cart.items.reduce((a, b) => {return Number(a)+Number(b.price)}, 0)

    return(
        <div className="Cart-item">
            {cart &&
                cart.items.map((item) => {
                    return <li>{item.item}: ${item.price}</li>
                })
            }
            <h4>Total Bill: ${total}</h4>            
            <button onClick={() => {cart.setItems(cart.items.slice(0,cart.items.length - 1))}}>Delete last</button>
            <button onClick={() => {cart.setItems([])}}>Clear All</button>
        </div>
    )
}

export default Cart