import { useState } from "react"
import { Product, ProductInCart } from "../interfaces/interfaces"

export  const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({})

    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {

        setShoppingCart(prevShoppingCart => {

            if(count === 0){

                const { [product.id]: toDelete, ...rest} = prevShoppingCart
                console.log("el que voy a eliminar", toDelete)

                return rest
            }

            return {
                ...prevShoppingCart,
                [product.id]: {...product, count}
            }

        })

    }

    return{
        shoppingCart,
        onProductCountChange
    }
}