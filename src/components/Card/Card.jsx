
const Card = ({ product,handleAddToCart: handleAddToCart }) => {
  const { _id, name, image, price, stock } = product;
  return (
    <div>
      <div className="w-full rounded-lg shadow">
        <a href="#">
          <img
            className="p-8 rounded-t-lg"
            // src="https://lunettes.com.bd/wp-content/uploads/2020/08/AREN-BLACKfront2-500x500.jpg"
            src={image}
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <h1 className="text-2xl font-semibold mb-3 tracking-tight text-gray-900 dark: ">
            {name}
          </h1>
          <h2 className="text-3xl font-bold text-gray-900 dark: ">${price}</h2>
          <p className="text-xl mt-1 text-gray-900 dark: ">Stock:{stock}</p>
          <div className="flex items-center justify-end">
            <button onClick={()=>handleAddToCart(product)} className=" text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
