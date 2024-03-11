import { ProductCard,ProductButtons, ProductImage, ProductTitle } from "../components"
import coffeeImg from "/public/coffee-mug.png"


const product = {
    id: '1',
    title: 'Coffee mug - Card',
    img: coffeeImg
}

const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping store</h1>
            <hr />
            <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap"
            }}>
                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title title="Con puntico"/>
                    <ProductCard.Buttons />
                </ProductCard>

                <ProductCard product={product}>
                    <ProductImage/>
                    <ProductTitle />
                    <ProductButtons />
                </ProductCard>
            </div>
        </div>
    )
}

export default ShoppingPage
