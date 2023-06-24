import Spinner from "./components/Spinner/Spinner";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const App = () => {
  const [currentTab, setCurrentTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10; // Number of items per page

  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["products", currentTab, currentPage],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:5000/products?tab=${currentTab}&page=${currentPage}&pageSize=${pageSize}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  console.log(data);
  // Handle tab click event
  const handleTabClick = (tab) => {
    setCurrentTab(tab);
    setCurrentPage(1);
    // refetch(); // Fetch data for the selected tab and first page
  };

  // Handle page change event
  const handlePageChange = (page) => {
    setCurrentPage(page);
    // refetch(); // Fetch data for the selected tab and current page
  };
  // console.log(data);
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <main className="max-w-screen-xl mx-auto border m-12">
        {/* tabs */}
        <div>
          <ul className="flex justify-between p-7">
            <li>
              <button
                onClick={() => handleTabClick("all")}
                className={`${currentTab == "all" ? "underline" : ""}`}
              >
                All Orders
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabClick("regular")}
                className={`${currentTab == "regular" ? "underline" : ""}`}
              >
                Regular Orders
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabClick("express")}
                className={`${currentTab == "express" ? "underline" : ""}`}
              >
                Express Orders
              </button>
            </li>
          </ul>
        </div>
        <div className="flex  px-4 py-3 space-y-3 lg:items-center justify-end lg:space-y-0 lg:space-x-4">
          <div className="flex items-center  space-x-4">
            <span className="">Total Products : {data?.length || 0} </span>
            <h5 className="">
              <span>Total Price : </span>
              {/* <span>${total}</span> */}
            </h5>
            <button className="btn btn-accent">Pay All</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  #
                </th>
                <th scope="col" className="px-4 py-3">
                  Image
                </th>

                <th scope="col" className="px-4 py-3">
                  name
                </th>

                <th scope="col" className="px-4 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-4 py-3">
                  Price
                </th>

                <th scope="col" className="px-4 py-3">
                  Delete
                </th>
                <th scope="col" className="px-4 py-3">
                  Payment
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.map((product, index) => (
                <tr
                  key={product?._id}
                  className="border-b dark:border-gray-600  hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <td className="w-4 px-4 py-3">
                    <div className="flex items-center">{index + 1}</div>
                  </td>
                  <th
                    scope="row"
                    className="flex items-center px-4 py-2 font-medium whitespace-nowrap "
                  >
                    <img
                      src={product?.image}
                      alt="iMac Front Image"
                      className="w-auto h-8 mr-3"
                    />
                  </th>

                  <td className="px-4 py-2">
                    <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                      {product?.name}
                    </span>
                  </td>

                  <td className="px-4 py-2 font-medium whitespace-nowrap ">
                    <p className="flex items-center text-center">
                      {product?.quantity}
                    </p>
                  </td>
                  <td className="px-4 py-2 font-medium whitespace-nowrap ">
                    $ {product?.price}
                  </td>

                  <td className="px-4 link py-2 font-medium whitespace-nowrap dark:text-warning">
                    <button
                      onClick={() => handleDelete(product?._id)}
                      className="btn btn-warning"
                    >
                      Delete
                    </button>
                  </td>
                  <td className="px-4 link py-2 font-medium whitespace-nowrap dark:text-warning">
                    <button className="btn btn-success">Pay</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <nav
          className="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
          aria-label="Table navigation"
        >
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Showing
            <span className="font-semibold ">1-10</span>
            of
            <span className="font-semibold ">1000</span>
          </span>
          <ul className="inline-flex items-stretch -space-x-px">
            <li>
              <a
                href="#"
                className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500   rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500   border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500   border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                className="z-10 flex items-center justify-center px-3 py-2 text-sm leading-tight border text-primary-600 bg-primary-50 border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 "
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500   border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                ...
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500   border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                100
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500   rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </main>
      <div className="border">
        <ul className="flex justify-center p-7">
          {Array.from(
            { length: Math.ceil(data?.length / pageSize) },
            (_, i) => (
              <li key={i}>
                <button
                  onClick={() => handlePageChange(i + 1)}
                  className={`${
                    currentPage === i + 1 ? "" : ""
                  } px-3 py-1 rounded-md focus:outline-none`}
                >
                  12334
                </button>
              </li>
            )
          )}
        </ul>
      </div>
    </>
  );
};

export default App;
