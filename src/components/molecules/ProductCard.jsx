import { comma } from "../../utils/convert";
import Card from "../atoms/Card";
import Photo from "../atoms/Photo";

const ProductCard = ({ product, className }) => {
  const staticServerUrl = process.env.REACT_APP_PATH || "";
  return (
    <Card to={`/product/${product.id}`} className={className}>
      <Photo
        src={`${staticServerUrl}/images/${product.id}.jpg`}
        alt={product.productName}
      />
      <h3 className="h-[24px] w-[249.25px] text-ellipsis whitespace-nowrap overflow-hidden">
        {product.productName}
      </h3>
      <span className="badge text-gray-600 bg-slate-200 mx-10 block bt-2 rounded-md text-xs p-1">
        무료 배송
      </span>
      <p className="text-xl font-bold">{comma(product.price)}원 ~</p>
    </Card>
  );
};

export default ProductCard;
