import { ImageWrapper, ProductItemStyled, ItemPrice, ItemTitle, Button } from "./ProductItemStyled";
import { addToCart } from "../../redux/actions";
import { useDispatch } from "react-redux";

const ProductItem = (item) => {

    const product = item.item;
    const dispatch = useDispatch();

    const addItem = () => {
        dispatch(addToCart(product))
    }
    
    return (
        <ProductItemStyled>
            <ImageWrapper>
                <img  alt={product.id} src={product.image}/>
            </ImageWrapper>
            <ItemTitle>
                {product.title}
            </ItemTitle>
            <ItemPrice>
                {product.price}$
            </ItemPrice>
            <Button onClick={() => {
                addItem()
            }}>Add to cart</Button>
        </ProductItemStyled>
    )
}

export default ProductItem