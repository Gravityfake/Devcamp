import { Link, useNavigate } from "react-router-dom";

function WarehouseLocation2() {
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

  let navigate = useNavigate();
  function handleClick(e, index) {
    e.preventDefault();
    navigate(`/warehousedetail2`, {
      replace: true,
      state: warehouseList[index],
    });
  }

  return (
    <div>
      <h2>Warehouse Location 2</h2>
      <ul>
        {warehouseList.map((x, i) => (
          <li>
            {x.warehouse_name}
            {/* <Link
              to={`${x.id}/${x.firstname}/${x.lastname}/${x.position}/${x.department}`}
            > */}
            <input
              type="button"
              value="warehouse detail"
              style={{ marginLeft: "10px" }}
              onClick={(e) => handleClick(e, i)}
            />
            {/* </Link> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WarehouseLocation2;