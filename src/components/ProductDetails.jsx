import React, { useState } from "react";
import { data } from "../data";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import SearchFunctionality from "../pages/SearchFunctionality";

const ProductDetails = () => {
  const [productData, setProductData] = useState(data);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  

  const paginationHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= productData.length &&
      selectedPage !== page
    )
      setPage(selectedPage);
  };

  return (
    <div className="mt-8 shadow-lg w-[95vw] mx-auto">
      {/* SEARCH FUNCTIONALITY */}
      <SearchFunctionality setSearch={setSearch} />
      {/* COLOUMN FILTERS */}
      <div className="m-4 flex justify-between">
        <h2 className="text-lg">Product summary</h2>
        <div className="flex">
          <label>show</label>
          <select className="select select-sm w-48 mx-2 border-black">
            <option>All</option>
          </select>
          <button className="btn btn-primary btn-sm px-4">Dispatched</button>
          {/* PAGINATION */}
          <div className="flex mx-4">
            <button
              className="join-item"
              onClick={() => paginationHandler(page - 1)}
            >
              <IoIosArrowBack />
            </button>
            {productData.length > 0 && (
              <div className="">
                {Array.from({
                  length: Math.ceil(productData.length / 10),
                }).map((_, index) => {
                  return (
                    <button
                      key={index}
                      className=" btn bg-transparent  btn-sm "
                      onClick={() => paginationHandler(index + 1)}
                    >
                      {index + 1}
                    </button>
                  );
                })}
              </div>
            )}
            <button
              className="join-item"
              onClick={() => paginationHandler(page + 1)}
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>id</th>
              <th>SHPIIFY</th>
              <th>DATE</th>
              <th>STATUS</th>
              <th>CUSTOMER</th>
              <th>EMAIL</th>
              <th>COUNTRY</th>
              <th>SHIPPING</th>
              <th>SOURCE</th>
              <th>ORDER TYPE</th>
            </tr>
          </thead>
          {productData
            .slice(page * 10 - 10, page * 10)
            .filter((data) => {
              return search.toLowerCase() === ""
                ? data
                : data.customer.toLowerCase().includes(search);
            })
            .map((data) => {
              const {
                address,
                country,
                customer,
                date,
                email,
                order_no,
                source,
                status,
              } = data;
              return (
                <tbody key={order_no}>
                  {/* row 1 */}
                  <tr>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>{order_no}</td>
                    <td>{order_no}</td>
                    <td>{date}</td>
                    <td>{status}</td>
                    <td>{customer}</td>
                    <td>{email}</td>
                    <td>{country}</td>
                    <td>{address}</td>
                    <td>{source}</td>
                    <td>Customer</td>
                    <td>
                      <FaEdit />
                    </td>
                  </tr>
                </tbody>
              );
            })}
        </table>
      </div>
    </div>
  );
};

export default ProductDetails;
