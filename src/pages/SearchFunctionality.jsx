import React from "react";
import { Form } from "react-router-dom";
import { FaAngleDoubleDown } from "react-icons/fa";

const SearchFunctionality = ({ setSearch }) => {
  return (
    <Form className="w-[95vw] mx-auto flex justify-between shadow-lg rounded-lg p-4 mt-4">
      <label className="form-control w-96">
        <div className="label">
          <span className="label-text">What are you looking for?</span>
        </div>
        <input
          type="text"
          placeholder="Search for Customer name"
          className="input input-bordered w-[100%] max-w-lg border-none bg-slate-100"
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
      <label className="form-control w-64 max-w-xs ">
        <div className="label">
          <span className="label-text">Category</span>
        </div>
        <select className="select select-bordered">
          <option selected>All</option>
        </select>
      </label>
      <label className="form-control w-64 max-w-xs">
        <div className="label">
          <span className="label-text">Status</span>
        </div>
        <select className="select select-bordered">
          <option selected>All</option>
          <option>Pending</option>
          <option>Dispatched</option>
          <option>Shipped</option>
          <option>Delivered</option>
        </select>
      </label>
      <button className="btn mt-8 ">
        <FaAngleDoubleDown />
      </button>
      <button className="btn bg-primary text-white mt-10 btn-sm px-8 ">
        Search
      </button>
    </Form>
  );
};

export default SearchFunctionality;
