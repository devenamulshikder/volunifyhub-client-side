import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const ManageMyPost = () => {
  const { user } = useContext(AuthContext);
  const [filters, setFilter] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:9000/manageMyPost/${user.email}`)
      .then((res) => res.json())
      .then((data) => setFilter(data));
  }, [user.email]);
  console.log(filters);
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-center my-8 md:my-12 lg:my-16">
        Manage my post page
      </h1>
      {/* card */}
      <div>
        {filters.map((filter) => (
          <div className="hover:scale-105 duration-500" key={filter._id}>
            <section className="lg:flex lg:justify-center mb-8 lg:mb-12">
              <div className="overflow-hidden lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-xl lg:rounded-xl">
                <div className="lg:w-1/2">
                  <div
                    className="h-64 bg-cover lg:h-full"
                    style={{
                      backgroundImage: `url(${filter?.Thumbnail})`,
                    }}
                  ></div>
                </div>
                <div className="max-w-xl px-6 py-10 lg:max-w-5xl lg:w-1/2">
                  <h2 className="text-2xl font-semibold md:text-3xl">
                    {filter?.PostTitle}
                  </h2>
                  <p className="mt-4">{filter.description}</p>
                  <div className="mt-3 space-y-2">
                    <p className="font-semibold">Category: {filter.Category}</p>
                    <p className="font-semibold">
                      Date: Date: {new Date(filter?.date).toLocaleDateString()}
                    </p>

                    <p className="font-semibold">Location: {filter.Location}</p>
                    <p className="font-semibold">
                      No. of Needed Volunteer :{" "}
                      {filter?.No_of_volunteers_needed}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageMyPost;
