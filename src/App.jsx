import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import NotFound from "./pages/NotFound";
import Registration from "./pages/Registration";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signin from "./pages/Signin";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Books from "./pages/Books";
import SingleBook from "./pages/SingleBook";
import Cart from "./pages/Cart";
import PrivateRoute from "./components/PrivateRoute";
import Order from "./pages/Order";
import OrderConferm from "./pages/OrderConferm";
import DashBoardLayout from "./components/dashboard/DashBoardLayout";
import AddBook from "./components/dashboard/sellerdashboard/AddBook";
import UserDashboard from "./components/dashboard/userdashboard/UserDashboard";
import ShowProduct from "./components/dashboard/sellerdashboard/ShowProduct";
import OrderProduct from "./components/dashboard/sellerdashboard/OrderProduct";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<SingleBook />} />
        <Route path="/order-confirmation" element={<OrderConferm />} />
    
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route

        />

        <Route path="/dashboard"element={<PrivateRoute><DashBoardLayout /></PrivateRoute>} >
        <Route path="/dashboard/seller/addproduct" element = {<AddBook />} />
        <Route path="/dashboard" element = {<ShowProduct />} />
        <Route path="/dashboard/seller/product" element = {<ShowProduct />} />
        <Route path="/dashboard/seller/order" element = {<OrderProduct />} />
        <Route path="/dashboard/user/order" element = {<UserDashboard />} />
          

        </Route>

        <Route
          path="/order"
          element={
            <PrivateRoute>
              <Order />
            </PrivateRoute>
          }
        />
          <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
