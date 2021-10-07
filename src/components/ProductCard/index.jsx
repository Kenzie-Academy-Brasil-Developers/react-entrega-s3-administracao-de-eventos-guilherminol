import { Card } from "./style";
import Buttons from "../Buttons";
const ProductCard = ({ product }) => {
  return (
    <Card>
      <h3>{product.name}</h3>
      <img src={product.image_url} alt={product.name} />
      <p>{product.tagline}</p>
      <Buttons product={product} />
    </Card>
  );
};
export default ProductCard;
