import ProductCard from "../ProductCard";
import { Container, ProductsList } from "./style";
const ProductsContainer = ({ products }) => {
  return (
    <Container>
      <ProductsList>
        {products.map((product, index) => {
          return <ProductCard key={index} product={product} />;
        })}
      </ProductsList>
    </Container>
  );
};
export default ProductsContainer;
