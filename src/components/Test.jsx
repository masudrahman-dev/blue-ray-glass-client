import React from "react";

const Test = () => {
  return (
    <div>
      <main className="max-w-screen-xl mx-auto">
        {/* tabs */}
        <div>
          <ul className="flex justify-between p-7">
            <li>
              <a href="">All Orders</a>
            </li>
            <li>
              <a href="">Regular Orders</a>
            </li>
            <li>
              <a href="">Express Orders</a>
            </li>
          </ul>
        </div>
        {/* table */}
        <section className="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5 text-white">
          <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
            {/*  */}
            <div className="relative overflow-hidden   shadow-md dark:bg-gray-800 sm:rounded-lg">
              <div className="flex  px-4 py-3 space-y-3 lg:items-center justify-end lg:space-y-0 lg:space-x-4">
                <div className="flex items-center  space-x-4">
                  <span className="dark:text-white">
                    {/* Total Selected : {data?.length || 0}{" "} */}
                  </span>
                  <h5 className="dark:text-white">
                    <span>Total Price : </span>
                    {/* <span>${total}</span> */}
                  </h5>
                  <button className="btn btn-accent">Pay All</button>
                </div>
              </div>

              {/* table */}
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
                        class Name
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Instructor name
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Instructor email
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Seats
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
                    {data?.map((item, index) => (
                      <tr
                        key={item?._id}
                        className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <td className="w-4 px-4 py-3">
                          <div className="flex items-center">{index + 1}</div>
                        </td>
                        <th
                          scope="row"
                          className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          <img
                            src={item?.class_image}
                            alt="iMac Front Image"
                            className="w-auto h-8 mr-3"
                          />
                        </th>
                        <td className="px-4 py-2">
                          <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                            {item?.class_name}
                          </span>
                        </td>
                        <td className="px-4 py-2">
                          <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                            {item?.instructor_name}
                          </span>
                        </td>
                        <td className="px-4 py-2">
                          <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                            {item?.instructor_email}
                          </span>
                        </td>

                        <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          <p className="flex items-center text-center">
                            {item?.seats}
                          </p>
                        </td>
                        <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          $ {item?.price}
                        </td>

                        <td className="px-4 link py-2 font-medium text-gray-900 whitespace-nowrap dark:text-warning">
                          <button
                            onClick={() => handleDelete(item?._id)}
                            className="btn btn-warning"
                          >
                            Delete
                          </button>
                        </td>
                        <td className="px-4 link py-2 font-medium text-gray-900 whitespace-nowrap dark:text-warning">
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
                  <span className="font-semibold text-gray-900 dark:text-white">
                    1-10
                  </span>
                  of
                  <span className="font-semibold text-gray-900 dark:text-white">
                    1000
                  </span>
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
                      className="z-10 flex items-center justify-center px-3 py-2 text-sm leading-tight border text-primary-600 bg-primary-50 border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
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
            </div>
          </div>
        </section>

        {/* <div className="grid gap-8 grid-cols-1 border p-4  md:grid-cols-2 lg:grid-cols-3">
        {data?.map((product) => (
          <Card
            key={product._id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Card>
        ))}
      </div> */}
      </main>
    </div>
  );
};

export default Test;
