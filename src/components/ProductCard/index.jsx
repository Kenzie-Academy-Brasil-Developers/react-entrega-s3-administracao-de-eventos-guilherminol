import { Card } from "./style";
const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <Card>
      <h3>{product.name}</h3>
      <img src={product.image_url} alt={product.name} />
      <p>{product.tagline}</p>
    </Card>
  );
};
export default ProductCard;
