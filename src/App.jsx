import { useQuery } from "@tanstack/react-query";
import Card from "./components/Card/Card";
import Spinner from "./components/Spinner/Spinner";
import { useEffect } from "react";
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";

const App = () => {
  // const { isLoading, isError, data, error, refetch } = useQuery({
  //   queryKey: ["products"],
  //   queryFn: async () => {
  //     const response = await fetch(`http://localhost:5000/products`);
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     return response.json();
  //   },
  // });
  const data = null;
  const handleAddToCart = (cart) => {
    console.log("click");
    console.log(cart);
    // Swal.fire({
    //   title: "Are you sure?",
    //   text: "You won't be able to revert this!",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Yes, delete it!",
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     Swal.fire("Deleted!", "Your file has been deleted.", "success");
    //   }
    // });
  };

  console.log(data);
  // if (isLoading) {
  //   return <Spinner />;
  // }

  // if (isError) {
  //   return <span>Error: {error.message}</span>;
  // }

  return (
    <main className="max-w-screen-xl mx-auto">
      <Header></Header>
      <Table></Table>
      <div className="grid gap-8 grid-cols-1 border p-4  md:grid-cols-2 lg:grid-cols-3">
        {data?.map((product) => (
          <Card
            key={product._id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Card>
        ))}
      </div>
    </main>
  );
};

export default App;
