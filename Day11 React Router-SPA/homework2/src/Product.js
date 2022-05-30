import { Link } from "react-router-dom";

function Product() {
  const productList = [
    { id: "001", name: "iPhone 13 Pro" },
    { id: "002", name: "iPhone 13 ProMax" },
    { id: "003", name: "iPad Air" },
    { id: "004", name: "Macbook Pro" },
    { id: "005", name: "iMac Pro" },
  ];
  return (
    <div style={{ marginLeft: "20px" }}>
      <h2>Apple Product</h2>
      <ul>
        {productList.map((x) => (
          <li>
            {/* x.id ก็จะต่อกับ path ปัจจุบัน */}
            <Link to={`${x.id}`}>{x.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Product;