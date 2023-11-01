import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products/Products";
import Dashboard from "./pages/Dashboards/Dashboard";
import Layout from "./components/shard/Layout";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";



const App = () => {
  const [token , setToken] = useState(localStorage.getItem('Token'))

  if(!token){
    return <Login  setToken={setToken} token={token} />
  } 
  // useEffect(()=>{
  //   console.log(token);
  // },[token])



  return (
    <Routes>
      <Route path="/admin" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/admin/products" element={<Products />} />
      </Route>

      {/* login */}
      {/* <Route path="/" element={<Login setToken={setToken} token={token}/>} /> */}
      <Route path="/login" element={<Login setToken={setToken} token={token}/>} />
      <Route path="/register" element={<Register/>} />

    </Routes>
  );
};

export default App;
