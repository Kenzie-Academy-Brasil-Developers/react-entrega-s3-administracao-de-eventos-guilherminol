import { ProductsListProvider } from "./productsList";
import { CartProvider } from "./cart";

const Providers = ({ children }) => {
  return (
    <ProductsListProvider>
      <CartProvider>{children}</CartProvider>
    </ProductsListProvider>
  );
};
export default Providers;
