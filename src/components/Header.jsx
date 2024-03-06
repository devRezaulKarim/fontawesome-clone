import HeaderFilters from "./HeaderFilters";
import HeaderSearch from "./HeaderSearch";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className=" md:px-4 lg:px-0">
      <Navbar />
      <HeaderSearch />
      <HeaderFilters />
    </div>
  );
};

export default Header;
