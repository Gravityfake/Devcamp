import { Link } from "react-router-dom";

function WarehouseLocation() {
  const warehouseList = [
    {
      id: "001",
      warehouse_name: "Warehouse001",
      latitude: "113.532095",
      longitude: "100.286540",
      tel: "0811111111",
      fax: "022-009-9111",
    },
    {
      id: "002",
      warehouse_name: "Warehouse002",
      latitude: "13.559079",
      longitude: "100.293611",
      tel: "0822222222",
      fax: "022-109-9222",
    },
    {
      id: "003",
      warehouse_name: "Warehouse003",
      latitude: "13.811644",
      longitude: "100.076392",
      tel: "0833333333",
      fax: "022-209-9333",
    },
    {
      id: "004",
      warehouse_name: "Warehouse004",
      latitude: "13.860969",
      longitude: "100.091200",
      tel: "0844444444",
      fax: "022-309-9444",
    },
    {
      id: "005",
      warehouse_name: "Warehouse005",
      latitude: "14.056743",
      longitude: "100.450796",
      tel: "0855555555",
      fax: "022-409-95555",
    },
  ];
  return (
    <div>
      <h2>Warehouse Location</h2>
      <ul>
        {warehouseList.map((x) => (
          <li>
            <Link
              to={`${x.id}/${x.warehouse_name}/${x.latitude}/${x.longitude}/${x.tel}/${x.fax}`}
            >
              {x.warehouse_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WarehouseLocation;