import { ImageWrapper, ItemPrice, ItemTitle } from "../ProductItem/ProductItemStyled";
import { CartItemStyled } from "./CartItemStyled";
import { buyItem } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const CartItem = (item) => {

    const product = item.item
    const moneySum = useSelector((state) => state.moneySum)
    const dispatch = useDispatch();
    const buy = (product) => {
        if(moneySum < product.price){
           alert('Not enough balance')
        }else{
            dispatch(buyItem(product))
        }
    }

    return (
        <CartItemStyled>
            <ImageWrapper>
                <img  alt={product.id} src={product.image}/>
            </ImageWrapper>
            <ItemTitle>
                {product.title}
            </ItemTitle>
            <ItemPrice>
                {product.price}$
            </ItemPrice>
            <button onClick={() => buy(product)}>Buy</button>
        </CartItemStyled>
    )
}

export default CartItem;