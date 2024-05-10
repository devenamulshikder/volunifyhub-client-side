import { useEffect, useState } from "react";

const VolunteerNeeds = () => {
  const [allPost, setAllPost] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/allPost")
      .then((res) => res.json())
      .then((data) => {
        setAllPost(data);
      });
  }, []);
console.log(allPost);
  return (
    <>
      {allPost.slice(0, 6).map((post) => (
        <div
          key={post?._id}
          className=" p-4 mt-8 md:mt-12 lg:mt-16 overflow-hidden rounded-lg shadow-2xl border"
        >
          <div className="px-4 py-2">
            <h1 className="text-xl font-bold uppercase ">{post?.PostTitle}</h1>
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

          <img
            className="object-cover w-full h-48 mt-2"
            src={post?.Thumbnail}
            alt="NIKE AIR"
          />

          <div className="flex items-center justify-end px-4 py-2 ">
            <button className=" btn px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform  rounded bg-[#7ec242] focus:outline-none">
              View Details
            </button>
          </div>
        </div>
      ))}
    
    </>
  );
};

export default VolunteerNeeds;
