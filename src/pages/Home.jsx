import Banner from "../components/Banner";
import VolunteerNeeds from "../components/VolunteerNeeds";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="max-w-7xl mx-auto my-8 md:my-12 lg:my-16">
        <h1 className="text-lg md:text-2xl lg:text-5xl text-center lato font-bold">
          Volunteer Needs Now Section
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <VolunteerNeeds />
        </div>
      </div>
    </>
  );
};

export default Home;
