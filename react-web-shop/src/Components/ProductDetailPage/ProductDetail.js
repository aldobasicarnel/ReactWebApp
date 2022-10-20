import { useParams } from "react-router-dom";
import ProductDetailItem from "./ProductDetailItem";
import "./ProductDetail.css";
import ShopTitle from "../ShopTitle/ShopTItle";

const ProductDetail = ({ products }) => {
  const params = useParams();

  const product = products.find((product) => product.id == params.productId);

  if (!product) {
    return <p>No Product find</p>;
  }
  return (
    <div className="product-page">
      {" "}
      <ShopTitle title={`Product Detail`} />
      <div className="product-detail">
        <ProductDetailItem
          products={{
            id: product.id,
            thumbnail: product.thumbnail,
            title: product.title,
            description: product.description,
            price: product.price,
            brand: product.brand,
            category: product.category,
            rating: product.rating,
            stock: product.stock,
          }}
        />
      </div>
    </div>
  );
};

export default ProductDetail;
/* 
  const params = useParams();

  const product = products.find((product) => product.id === params.productId); */
