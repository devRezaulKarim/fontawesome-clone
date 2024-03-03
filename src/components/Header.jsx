import HeaderFilters from "./HeaderFilters";
import HeaderSearch from "./HeaderSearch";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <Navbar />
      <HeaderSearch />
      <HeaderFilters />
    </>
  );
};

export default Header;
