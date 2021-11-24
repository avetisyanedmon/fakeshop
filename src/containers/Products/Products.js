import { ProductsStyled } from "./ProductsStyled"
import ProductItem from "../../components/ProductItem/ProductItem"
import { useSelector } from "react-redux"
const Products = () => {
    
    const productsData = useSelector((state) => state.results)

    return (
        <ProductsStyled>
            {productsData && productsData.map((item) => {
            return(
                <ProductItem item={item} key={item.id}/>
            )
        })}
        </ProductsStyled>
    )
}

export default Products;