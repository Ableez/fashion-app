import { products } from "../../assets/products";
import ProductCard from "../../features/Product/ProductCard";

const AllProducts = () => {
  const allProducts = products;
  return (
    <div
      className="md:px-16 px-2 md:gap-0 gap-2"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        justifyItems: "center",
      }}
    >
      {allProducts.map((product) => {
        return <ProductCard key={product.title} el={product} />;
      })}
    </div>
  );
};

export default AllProducts;
