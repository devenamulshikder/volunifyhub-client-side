import { useEffect, useState } from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const VolunteerNeeds = () => {
  const [allPost, setAllPost] = useState([]);

  // const [sort, setSort]= useState('')

  useEffect(() => {
    fetch("https://volunify-hub-server.vercel.app/allPost")
      .then((res) => res.json())
      .then((data) => {
        setAllPost(data);
      });
  }, []);
  return (
    <>
      {allPost.slice(0, 6).map((post) => (
        <div key={post?._id}>
          <Zoom duration={1500}>
            <div className=" p-4 mt-8 md:mt-12 lg:mt-16 overflow-hidden rounded-lg shadow-2xl border">
              <div className="px-4 py-2">
                <h1 className="text-xl font-bold uppercase ">
                  {post?.PostTitle}
                </h1>
                <div className="">
                  <p className="mt-1 text-sm">
                    Category :{" "}
                    <span className="font-semibold">{post.Category}</span>
                  </p>
                  <p className="mt-1 text-sm">
                    Deadline :{" "}
                    <span className="font-semibold">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                  </p>
                </div>
              </div>

              <Fade duration={2000}>
                <img
                  className="object-cover w-full h-48 mt-2"
                  src={post?.Thumbnail}
                  alt="NIKE AIR"
                />
              </Fade>

              <div className="flex items-center justify-end px-4 py-2 mt-1">
                <button className=" btn px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform  rounded hover:text-[#7ec242] bg-[#7ec242] focus:outline-none">
                  <Link to={`/volunteerNeedDetails/${post._id}`}>View Details</Link>
                </button>
              </div>
            </div>
          </Zoom>
        </div>
      ))}
    </>
  );
};

export default VolunteerNeeds;
