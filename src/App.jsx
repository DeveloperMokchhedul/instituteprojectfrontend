function App() {
  const { currentUser } = useSelector((state) => state.user);
  const role = currentUser?.data?.data?.user?.role || "guest";

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
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashBoardLayout />
            </PrivateRoute>
          }
        >
          {role === "user" && <Route path="/dashboard" element={<UserDashboard />} />}
          {role === "seller" && <Route path="/dashboard" element={<ShowProduct />} />}
          {!["user", "seller"].includes(role) && (
            <Route path="/dashboard" element={<NotFound />} />
          )}

          <Route path="/dashboard/seller/addproduct" element={<AddBook />} />
          <Route path="/dashboard/seller/product" element={<ShowProduct />} />
          <Route path="/dashboard/seller/order" element={<OrderProduct />} />
          <Route path="/dashboard/user/order" element={<UserDashboard />} />
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
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
