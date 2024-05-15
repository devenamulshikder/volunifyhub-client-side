import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { MdTableRows } from "react-icons/md";
import { Link } from "react-router-dom";

const NeedVolunteer = () => {
  const [allVolunteer, setAllVolunteer] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredVolunteer, setFilteredVolunteer] = useState([]);
  const [viewMode, setViewMode] = useState("card"); // New state for view mode

  useEffect(() => {
    fetch("http://localhost:9000/allPost")
      .then((res) => res.json())
      .then((data) => {
        setAllVolunteer(data);
        setFilteredVolunteer(data);
      });
  }, []);

  useEffect(() => {
    const filtered = allVolunteer.filter((volunteer) =>
      volunteer.PostTitle.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredVolunteer(filtered);
  }, [search, allVolunteer]);

  const handleSearch = (e) => {
    e.preventDefault();
    const text = e.target.search.value;
    setSearch(text);
  };

  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === "card" ? "table" : "card"));
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <Helmet>
        <title>Volunify || Need Volunteer Page</title>
      </Helmet>
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center md:mt-12">
        Need Volunteer Page
      </h1>
      <div className="flex justify-start md:justify-end lg:justify-end p-2">
        <form
          onSubmit={handleSearch}
          className="join flex justify-center md:justify-end px-5 my-8"
        >
          <div>
            <input
              name="search"
              className="input input-bordered join-item"
              placeholder="Search"
            />
          </div>
          <div className="indicator">
            <button className="btn join-item bg-[#7ec242] hover:bg-[#7ec242] text-black">
              Search
            </button>
          </div>
        </form>
        <div className=" flex items-center">
          <button className=" hover:scale-105 duration-30000">
            <MdTableRows
              size={40}
              onClick={toggleViewMode}
              style={{ cursor: "pointer" }}
            />
          </button>
        </div>
      </div>

      {viewMode === "card" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-12">
          {filteredVolunteer.map((volunteer) => (
            <div key={volunteer._id} className="hover:scale-105 duration-700">
              <div className="p-6 rounded-md shadow-xl bg-gray-900 dark:bg-gray-50 text-gray-50 dark:text-gray-900">
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
                    <Link
                      to={`/VolunteerNeedPostDetailsPage/${volunteer?._id}`}
                    >
                      View Details
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="text-sm">
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Thumbnail</th>
                <th>Post Title</th>
                <th>Category</th>
                <th>Date</th>
                <th>View Details</th>
              </tr>
            </thead>
            <tbody>
              {filteredVolunteer.map((table) => (
                <tr key={table._id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={table.Thumbnail}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{table.PostTitle}</td>
                  <td>{table.Category}</td>
                  <td>{new Date(table.date).toLocaleDateString()}</td>
                  <th>
                    <Link to={`/VolunteerNeedPostDetailsPage/${table?._id}`}>
                      <button className="btn btn-ghost bg-[#7ec242] text-black btn-xs">
                        details
                      </button>
                    </Link>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default NeedVolunteer;
