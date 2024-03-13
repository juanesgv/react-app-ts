
import { useProduct } from '../hooks/useProduct'
import styles from '../styles/styles.module.css'
import { createContext } from 'react';
import { Product, ProductContextProps, OnChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';

export const productContext = createContext({} as ProductContextProps)
const { Provider } = productContext

export interface Props {
    product: Product;
    // children?: ReactElement | ReactElement[];
    children: (args: ProductCardHandlers) => JSX.Element;
    className?: string;
    style?: React.CSSProperties;
    onChange?: (args: OnChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues
}

export const ProductCard = ({children, product, className, style, onChange, value, initialValues }:Props) => {

    const {counter, increaseBy, maxCount, isMaxCountReached, reset} = useProduct({ onChange, product, value, initialValues })

    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
            maxCount
        }}>
            <div 
                className={`${styles.productCard} ${className}`}
                style={ style }
            >
                { children({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product,
                    increaseBy,
                    reset
                }) }
            </div>
        </Provider>
    )
}

