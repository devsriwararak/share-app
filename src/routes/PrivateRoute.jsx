import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/shard/Layout";
import Dashboard from "../pages/Dashboards/Dashboard";
import Products from "../pages/Products/Products";
import Home from "../pages/Home";
import BasicHome from "../pages/AdminMain/Basic/BasicHome";
import BasicWong from "../pages/AdminMain/Basic/BasicWong";
import CrudAdmin from "../pages/AdminMain/CrudAdmin";
import HomeShare from "../pages/AdminMain/Homes/HomeShare";
import GroupShare from "../pages/AdminMain/Homes/GroupShare";
import User from "../pages/AdminMain/User/User";
let Type = localStorage.getItem("Type");

const PrivateRoute = () => {
  return (
    <>
   
      {Type == "main-admin" || Type == "admin" ? (
        <Routes>
          <Route path="/admin" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/admin/basic/home" element={<BasicHome />} />
            <Route path="/admin/basic/wong" element={<BasicWong />} />
            <Route path="/admin/crud-admin" element={<CrudAdmin />} />
            <Route path="/admin/home-share" element={<HomeShare />} />
            <Route path="/admin/group-share" element={<GroupShare />} />
            <Route path="/admin/manage-user" element={<User />} />
          </Route>
          <Route path="/" element={<Navigate to="/admin" />} />
          <Route path="*" element={<Navigate to="/admin" />} />
        </Routes>
      ) : ""}
      {Type == "user" ? (
        <Routes>
          <Route path="/user" element={<Layout />} />
          <Route path="/" element={<Navigate to="/user" />} />
          <Route path="*" element={<Navigate to="/user" />} />
        </Routes>
      ): ""}
    </>
  );
};

export default PrivateRoute;
