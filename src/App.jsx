import Spinner from "./components/Spinner/Spinner";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

// `http://localhost:5000/products?tab=${currentTab}&page=${page}&limit=${limit}`
const App = () => {
  const [currentTab, setCurrentTab] = useState("all");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["products", currentTab, page],
    queryFn: async () => {
      const response = await fetch(
        `https://blue-ray-glass-server.vercel.app/products?tab=${currentTab}&page=${page}&limit=${limit}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  // Handle tab click event
  const handleTabClick = (tab) => {
    setCurrentTab(tab);

    refetch();
  };
  let size = Math.ceil(90 / limit);

  const handlePreviousPage = () => {
    if (page === 1) {
      setPage(1);
    } else {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page === size) {
      setPage(size);
    } else {
      setPage(page + 1);
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // `https://blue-ray-glass-server.vercel.app/products/${id}`
        axios
          .delete(`http://localhost:5000/products/${id}`)
          .then((res) => {
            // console.log(res.data.deletedCount);
            if (res.data.deletedCount >= 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Error deleting product",
            });

            // console.error("Error deleting product:", error);
          });
      } else {
        console.log("cancel");
      }
    });
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

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left   ">
            <thead className="text-xs dark:text-white uppercase  dark:bg-gray-800  ">
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
                  shipment
                </th>
                <th scope="col" className="px-4 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-4 py-3">
                  Price
                </th>

                <th scope="col" className="px-4 py-3 ">
                  Delete
                </th>
                <th scope="col" className="px-4 py-3">
                  Payment
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.products?.map((product, index) => (
                <tr
                  key={product?._id}
                  className="border-b dark:border-gray-600  hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
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
                      {product?.shipment}
                    </p>
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
                      className="text-rose-600 underline"
                    >
                      Delete
                    </button>
                  </td>
                  <td className="px-4 link py-2 font-medium whitespace-nowrap dark:text-warning">
                    <button className="text-indigo-700 underline">Pay</button>
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
          <span className="text-sm font-normal   ">
            <span className="font-semibold ">
              {" "}
              Total Pages: {data.totalPages}
            </span>
          </span>
          <ul className="inline-flex items-stretch -space-x-px">
            <li>
              <button
                disabled={page === 1}
                onClick={handlePreviousPage}
                className="flex items-center justify-center h-full py-1.5 px-3 ml-0    rounded-l-lg border dark:text-slate-300 border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700   dark:hover:bg-gray-700 dark:hover:text-white"
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
              </button>
            </li>
            <li>
              <span
                className="flex items-center justify-center px-3 py-2 text-sm leading-tight   
               border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700   dark:hover:bg-gray-700 dark:text-white"
              >
                {page}
              </span>
            </li>

            <li>
              <button
                disabled={page === size}
                onClick={handleNextPage}
                className="flex items-center justify-center h-full py-1.5 px-3 leading-tight    rounded-r-lg border border-gray-300
                 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700   dark:hover:bg-gray-700 dark:hover:text-white dark:text-slate-300"
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
              </button>
            </li>
          </ul>
        </nav>
      </main>
    </>
  );
};

export default App;
