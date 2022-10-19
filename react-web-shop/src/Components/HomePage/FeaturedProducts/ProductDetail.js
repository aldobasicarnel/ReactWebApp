import { useParams } from "react-router-dom";
import ProductDetailItem from "./ProductDetailItem";

const ProductDetail = ({ products }) => {
  const params = useParams();

  const product = products.find((product) => product.id === params.productId);
  return (
    <div>
      <h2>Product Details</h2>
      {products.map((product) => (
        <ProductDetailItem
          key={product.id}
          item={{
            id: product.id,
            title: product.title,
            description: product.description,
            price: product.price,
            brand: product.brand,
            stock: product.stock,
            category: product.category,
            images: product.images,
            rating: product.rating,
          }}
        />
      ))}
    </div>
  );
};

export default ProductDetail;
/* 
  const params = useParams();

  const product = products.find((product) => product.id === params.productId); */
