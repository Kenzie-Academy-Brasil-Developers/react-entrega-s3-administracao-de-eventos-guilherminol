import ProductCard from "../ProductCard";
import { Container, ProductsList } from "./style";
const ProductsContainer = ({ page, shop = false, products }) => {
  return (
    <Container>
      <ProductsList>
        {products.map((product, index) => {
          return (
            <ProductCard
              page={page}
              shop={shop}
              key={index}
              product={product}
            />
          );
        })}
      </ProductsList>
    </Container>
  );
};
export default ProductsContainer;
