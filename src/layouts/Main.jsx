import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <div>
      {/* navbar */}
      <div className="shadow-lg sticky z-50">
        <div className="max-w-7xl mx-auto">
          <NavBar />
        </div>
      </div>
      {/* outlet */}
      <Outlet />

      {/* footer */}
      <Footer/>
    </div>
  );
};

export default Main;
