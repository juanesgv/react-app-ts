
import { useProduct } from '../hooks/useProduct'
import styles from '../styles/styles.module.css'
import { ReactElement, createContext } from 'react';
import { Product, ProductContextProps } from '../interfaces/interfaces';

export const productContext = createContext({} as ProductContextProps)
const { Provider } = productContext

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: React.CSSProperties;
}

export const ProductCard = ({children, product, className, style }:Props) => {

    const {counter, increaseBy} = useProduct()

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div 
                className={`${styles.productCard} ${className}`}
                style={ style }
            >
                {children}
            </div>
        </Provider>
    )
}

