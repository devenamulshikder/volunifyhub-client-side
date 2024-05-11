import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import VolunteerNeeds from "../components/VolunteerNeeds";
import "animate.css";
import VolunteersBrighter from "../components/VolunteersBrighter";
import AboutUs from "../components/AboutUs";
const Home = () => {
  return (
    <>
      <Banner />
      <div className="max-w-7xl mx-auto my-8 md:my-12 lg:my-16">
        <h1 className="text-lg md:text-2xl lg:text-5xl text-center lato font-bold">
          Volunteer Needs Now Section
        </h1>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <VolunteerNeeds />
        </div>

        <div className="text-center mt-6 md:mt-8 lg:mt-14">
          <button className="text-lg p-2 before:absolute before:block before:inset-0 before:-z-10 before:bg-[#7ec242] text-white after:block hover:after:w-full after:w-0 after:hover:left-0 after:right-0 after:top-0 after:h-full after:-z-10 after:duration-300 after:bg-green-800 after:absolute relative inline-block">
            <Link to="/needVolunteer">See All Volunteers</Link>
          </button>
        </div>
      </div>
      <VolunteersBrighter/>
      <AboutUs/>
    </>
  );
};

export default Home;
