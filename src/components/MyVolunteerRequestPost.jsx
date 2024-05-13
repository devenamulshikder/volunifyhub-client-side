import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";

const MyVolunteerRequestPost = () => {
  const { user } = useContext(AuthContext);
  const [requestedUser, setRequestedUser] = useState([]);

  useEffect(() => {
    axios(`http://localhost:9000/requestedVolunteer/${user.email}`).then(
      (data) => {
        setRequestedUser(data.data);
      }
    );
  }, [user.email]);

  return (
    <div>
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center mb-8 md:mb-12 lg:mb-16">
        My Volunteer Request Post
      </h1>

      {/* requested volunteer */}
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="text-lg">
              <tr>
                <th>Post Title</th>
                <th>Category</th>
                <th>Date</th>
                <th>Cancel</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {requestedUser.map((filter) => (
                <tr key={filter?._id}>
                  <td>{filter?.PostTitle}</td>
                  <td>{filter?.Category}</td>
                  <td>{new Date(filter.date).toLocaleDateString()}</td>
                  <td>
                    <button
                      //   onClick={() => handleDelete(filter._id)}
                      className="btn bg-[#7ec242] text-black hover:text-[#7ec242]"
                    >
                      <Link className="flex gap-1">
                        <MdOutlineCancel />
                        Cancel
                      </Link>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {requestedUser.length === 0 && (
          <div className="flex flex-col justify-center items-center lg:min-h-[calc(100vh-500px)] space-y-3 my-5">
            <img
              className="w-36"
              src={"https://i.ibb.co/0ttkf0m/pngegg.png"}
              alt=""
            />
            <h1 className="font-semibold text-lg">
              You do not added any volunteer post
            </h1>
            <p className="text-sm font-semibold">Please add first</p>
            <Link to="/addVolunteerPost">
              <button className="rounded-md border bg-[#9ADE7B] font-bold px-2 md:px-4 py-2  duration-300 hover:bg-gray-200">
                Add Volunteer Post
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyVolunteerRequestPost;
