import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
import { Button } from "../../components/ProductItem/ProductItemStyled";
import { CartSyled, EmptyCart } from "./CartStyled";


const Cart = () => {

    const cartItems = useSelector((state) => state.cartItems)
    // const price = cartItems && cartItems.reduce((acc, item) => {
    //     return acc + item.price
    // },0)

    return (
        <CartSyled>
            {cartItems.length ?
            <>
                {cartItems && cartItems.map((item, index) => {
                return(
                    <CartItem item={item} key={item.id + index}/>
                )
            })}
        </> : 
        <EmptyCart>
            <h1>Cart is empty</h1>
                <Link to='/'>
                    <Button>Return to store</Button>
                </Link>
                
        </EmptyCart>
        }
        </CartSyled>
    )
}

export default Cart;