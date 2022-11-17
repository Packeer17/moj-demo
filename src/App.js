
import './App.scss';
import 'antd/dist/antd.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Home/Home"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
