import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

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
    </div>
  );
};

export default Main;
