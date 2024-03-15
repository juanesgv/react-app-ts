import { ProductCard, ProductButtons, ProductImage, ProductTitle } from "../components"
import { products } from "../data/products"

const product = products[0]

const ShoppingPage = () => {


    return (
        <div>
            <h1>Shopping store</h1>
            <hr />

            <ProductCard
                key={product.id}
                product={product}
                initialValues={{
                    count: 4,
                    maxCount: 10
                }}
            >
                {
                    ({}) => (
                        <>
                            <ProductImage />
                            <ProductTitle />
                            <ProductButtons />
                        </>
                    )
                }
        
            </ProductCard>

            <div className="shopping-cart">

            </div>

            {/* <div>
                <code>
                    {JSON.stringify(shoppingCart, null, 5)}
                </code>
            </div> */}
        </div>
    )
}

export default ShoppingPage
