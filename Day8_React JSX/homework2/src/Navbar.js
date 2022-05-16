import pic from "./pikkanode.png";

const css = {
  listStyleType: "none",
  // display: "inline",
  height: "auto",
  display: "flex",
  flexWrap: "wrap",
};

const miss = {
  display: "inline",
  paddingRight: "35px",
};

const menu = {
  textDecoration: "none",
};

const Navbar = () => {
  return (
    <ul style={css}>
      <li style={miss}>
        <a href="#">
          <img src={pic} style={{ height: "45px" }} alt="Logo" />
        </a>
      </li>
      <li style={miss}>
        <a href="#" style={menu}>
          Create pikka
        </a>
      </li>
      <li style={miss}>
        <a href="#" style={menu}>
          signup
        </a>
      </li>
      <li style={miss}>
        <a href="#" style={menu}>
          signin
        </a>
      </li>
      <li style={miss}>
        <a href="#" style={menu}>
          signout
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
