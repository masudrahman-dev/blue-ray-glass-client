const Row = ({ data }) => {
  return (
    <>
      {data?.map((item, index) => (
        <tr
          //   key={item?._id}
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
              //   src={item?.class_image}
              alt="iMac Front Image"
              className="w-auto h-8 mr-3"
            />
          </th>
          <td className="px-4 py-2">
            <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
              Name products
            </span>
          </td>

          <td className="px-4 py-2 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
            3
          </td>
          <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            price
          </td>

          <td className="px-4 link py-2 font-medium text-gray-900 whitespace-nowrap dark:text-warning">
            <button
              //   onClick={() => handleDelete(item?._id)}
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
    </>
  );
};

export default Row;
