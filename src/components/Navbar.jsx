import React from "react";
import Logo from "./Logo";
import SearchBox from "./SearchBox";

const Navbar = ({ query, setQuery, movies }) => {
  return (
    <nav className="nav-bar">
      <Logo />
      <SearchBox query={query} setQuery={setQuery} />
      <p className="num-results">
        Found <strong>{movies.length}</strong> results
      </p>
    </nav>
  );
};

export default Navbar;
