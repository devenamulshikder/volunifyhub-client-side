import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const NeedVolunteer = () => {
    const [allVolunteer, setAllVolunteer] = useState([])
    useEffect(()=>{
        fetch("http://localhost:9000/allPost")
        .then(res=>res.json())
        .then(data=>setAllVolunteer(data))
    },[])
    console.log(allVolunteer);
    return (
      <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-center my-8 md:my-12 lg:my-16">
          Need Volunteer Page
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-12">
          {allVolunteer.map((volunteer) => (
            <div key={volunteer._id} className="hover:scale-105 duration-700">
              <div className=" p-6 rounded-md shadow-xl bg-gray-900 dark:bg-gray-50 text-gray-50 dark:text-gray-900">
                <img
                  src={volunteer?.Thumbnail}
                  alt=""
                  className="object-cover object-center w-full rounded-md h-72 bg-gray-500 dark:bg-gray-500"
                />
                <div className="mt-6 mb-2">
                  <div className="flex justify-between mb-2">
                    <span className="block text-xs font-medium tracking-widest uppercase text-[#7ec242]">
                      Category: {volunteer?.Category}
                    </span>
                    <span className="block text-xs font-medium tracking-widest uppercase text-[#7ec242]">
                      Date: {new Date(volunteer?.date).toLocaleDateString()}
                    </span>
                  </div>

                  <h2 className="text-xl font-semibold tracking-wide">
                    {volunteer?.PostTitle}
                  </h2>
                </div>
                <p className="text-gray-100 dark:text-gray-800">
                  {volunteer?.description}
                </p>
                <div className="flex justify-end mt-4">
                  <button className="btn hover:bg-[#7ec242] text-[#7ec242] bg-gray-200 hover:text-slate-200">
                    <Link to={`/VolunteerNeedPostDetailsPage/${volunteer?._id}`}>
                      View Details
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default NeedVolunteer;