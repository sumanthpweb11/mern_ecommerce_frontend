import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
import Blog from "./pages/Blog";
import CompareProduct from "./pages/CompareProduct";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Forgotpassword from "./pages/Forgotpassword";
import Signup from "./pages/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* ------Layout Main Route containg OUTLET------ */}
          <Route path="/" element={<Layout />}>
            {/* index means slash */}
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="store" element={<OurStore />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="compare-product" element={<CompareProduct />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<Forgotpassword />} />
            <Route path="signup" element={<Signup />} />
          </Route>
          {/* ------Layout Main Route containg OUTLET------ */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
