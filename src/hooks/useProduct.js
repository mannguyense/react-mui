import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../services/reducers/product";

export const useProduct = () => {
    const { value: product } = useSelector(state => state.product);

    const dispatch = useDispatch();
    const addProductAction = (product) => dispatch(addProduct(product));
    const removeProductAction = (id) => dispatch(removeProduct(id));

    return {
        product,
        actions: {
            addProduct: addProductAction,
            removeProduct: removeProductAction,
        }
    }
}