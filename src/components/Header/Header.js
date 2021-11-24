import { HeaderWrapper, CartItemsCount, SumWrapper, AddBalance} from "./HeaderStyled"
import { Link } from "react-router-dom";
import cart from './image/shopping-cart.png';
import { useSelector } from "react-redux";

const Header = () => {

    const cartItems = useSelector((state) => state.cartItems)
    const sum = useSelector((state) => state.moneySum)


    return (
        <HeaderWrapper >
            <SumWrapper>
                <Link to='/'>
                    <h1>Fake Shop</h1>
                </Link>
                <h1>{sum}$</h1>
            </SumWrapper>
            <CartItemsCount>
                <AddBalance>
                    <Link to='/addbalance'>
                        <button>Add Balance</button>
                    </Link>
                </AddBalance>
                <Link to='/cart'>
                    <img alt='cart'src={cart} width='30px'/>
                </Link>
                {cartItems.length}
            </CartItemsCount>
        </HeaderWrapper>
    )
}

export default Header;