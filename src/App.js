import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import AddData from "./components/AddData";
import ProductDetails from "./components/ProductDetails";

function App() {
  const router = createBrowserRouter([
    {
      element: <Header />,
      path: "/",
      children: [
        {
          element: <AddData />,
          path: "/addData",
        },
        {
          element: <ProductDetails />,
          index: true,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
