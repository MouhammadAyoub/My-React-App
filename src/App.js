import Navbar from "./components/Navbar"
import Registration from "./components/Registration"
import Home from "./components/Home"
import Dashboard from "./components/Dashboard"
import { Footer } from './components/Footer';
import { Route, Routes } from "react-router-dom"


export default function App() {

  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </div>
      <Footer/>
    </>
  );
}