import { Product } from "../interfaces/interfaces"
import coffeeImg from "/coffee-mug.png"
import coffeeMeme from "/coffee-mug2.png"

const product1 = {
    id: '1',
    title: 'Coffee mug - Card',
    img: coffeeImg
}
const product2 = {
    id: '2',
    title: 'Coffee mug - meme',
    img: coffeeMeme
}

export const products: Product[] = [product1, product2]