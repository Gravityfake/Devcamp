import { useParams } from "react-router-dom";

function ProductDetail() {
  let param = useParams();
  console.log(param);
  return (
    <div style={{ marginLeft: "20px" }}>
      <h2>Product Detail</h2>
      <p>Product ID. {param.id}</p>
      </div>
  );
}

export default ProductDetail;