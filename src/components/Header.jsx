import React from "react";
import { Link, Outlet } from "react-router-dom";
import SearchFunctionality from "../pages/SearchFunctionality";

const Header = () => {
  return (
    <main>
      <header className="h-16 flex justify-between items-center w-[90vw] mx-auto">
        <Link to="/" className="capitalize text-primary text-3xl ">
          orders
        </Link>
        <Link to="addData" className="btn btn-primary btn-sm mt-0">
          Create New
        </Link>
      </header>
      <Outlet />
    </main>
  );
};

export default Header;
