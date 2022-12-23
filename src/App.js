import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

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
            <Route path="contact" element={<Contact />} />
          </Route>
          {/* ------Layout Main Route containg OUTLET------ */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
