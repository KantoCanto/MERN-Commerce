import React from "react";
import ReactDom from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store.js";
import "./assets/styles/index.css";
import "./assets/styles/bootstrap.custom.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import { FaStoreAlt } from "react-icons/fa";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/product/:id" element={<ProductScreen />} />
    </Route>
  )
);

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
