import React, { useState } from "react";
import { data } from "../data";
import { Link } from "react-router-dom";

const AddData = () => {
  const [newProduct, setNewProduct] = useState({
    id: "",
    shpiify: "",
    date: "",
    status: "pending",
    customer: "",
    email: "",
    country: "",
    shipping: "",
    source: "",
    orderType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = [...data, newProduct];
    console.log("Form data submitted:", newProduct);
  };

  return (
    <div className="m-4 w-[90vw] ">
      <h1 className="mx-auto my-4 text-3xl font-bold items-center">
        Add New Data
      </h1>
      <form onSubmit={handleSubmit} className="grid gap-4 grid-cols-2">
        <label className="input input-bordered flex items-center gap-2">
          Name
          <input
            type="text"
            name="customer"
            value={newProduct.customer}
            onChange={handleChange}
            className="input input-bordered w-[100%] max-w-lg border-none bg-slate-100"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 ">
          Email
          <input
            type="text"
            name="email"
            value={newProduct.email}
            onChange={handleChange}
            className="grow"
            placeholder="test@gmail.com"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 ">
          Date
          <input
            type="date"
            name="date"
            value={newProduct.date}
            onChange={handleChange}
            className="grow"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 ">
          Country
          <input
            type="text"
            name="country"
            value={newProduct.country}
            onChange={handleChange}
            className="grow"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 ">
          Address
          <input
            type="text"
            name="shipping"
            value={newProduct.shipping}
            onChange={handleChange}
            className="grow"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 ">
          Source
          <input
            type="text"
            name="source"
            value={newProduct.source}
            onChange={handleChange}
            className="grow"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 ">
          OrderType
          <input
            type="text"
            name="orderType"
            value={newProduct.orderType}
            onChange={handleChange}
            className="grow"
          />
        </label>

        <button type="submit" className="btn btn-primary btn-md px-4 w-full ">
          Submit
        </button>
      </form>
      <Link to="/" className="btn btn-secondary px-8 w-26 btn-sm mt-8">
        Go Back
      </Link>
    </div>
  );
};

export default AddData;
