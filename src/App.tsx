import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Countries from "./components/Countries/Countries";
import Navbar from "./components/Navbar/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Countries />,
  },
]);

function App() {
  return (
    <>
      <Navbar></Navbar>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
