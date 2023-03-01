import "./Header.css";
import HeaderText from "./HeaderText";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="header">
      <Navbar state={true} />
      <HeaderText />
    </div>
  );
}

export default Header;
