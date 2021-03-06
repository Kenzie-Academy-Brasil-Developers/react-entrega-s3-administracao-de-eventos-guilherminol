import { Card } from "./style";
import Buttons from "../Buttons";
import { Button } from "../Buttons/style";
import { useContext } from "react";
import { CartContext } from "../../Providers/cart";
const ProductCard = ({ page, shop, product }) => {
  const { removeProduct } = useContext(CartContext);
  console.log(product);
  return (
    <Card>
      <h3>{product.name}</h3>
      <div>
        <p>Desde {product.first_brewed}</p>
        <p>{product.volume.value + " " + product.volume.unit}</p>
      </div>
      <img src={product.image_url} alt={product.name} />
      <p>{product.tagline}</p>
      {shop ? (
        <Buttons product={product} />
      ) : (
        <Button onClick={() => removeProduct(page, product)}>
          Remover do Carrinho
        </Button>
      )}
    </Card>
  );
};
export default ProductCard;
