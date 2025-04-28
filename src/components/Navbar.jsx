import React from "react";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import NumResults from "./NumResults";

const Navbar = ({ query, setQuery, movies }) => {
  return (
    <nav className="nav-bar">
      <Logo />
      <SearchBox query={query} setQuery={setQuery} />
      <NumResults movies={movies} />
    </nav>
  );
};

export default Navbar;
