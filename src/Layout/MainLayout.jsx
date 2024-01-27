import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import "../Layout/Main.css";
const MainLayout = () => {
  return (
    <div className="main">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
