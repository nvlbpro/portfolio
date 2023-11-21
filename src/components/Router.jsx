import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import { Navigate } from "react-router-dom";
// import Error404 from "../Pages/Error404"
// import Error404 from "../Pages/Error404";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Burger from "./Burger";
function Router() {
  return (
    <BrowserRouter>
      <Burger />
      <NavBar />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Navigate to="/"/>}/>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
