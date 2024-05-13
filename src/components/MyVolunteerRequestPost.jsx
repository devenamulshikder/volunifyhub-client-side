import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import Swal from "sweetalert2";

const MyVolunteerRequestPost = () => {
  const { user } = useContext(AuthContext);
  const [requestedUser, setRequestedUser] = useState([]);
  const [cancelRequest, setCancelRequest] = useState([]);

  useEffect(() => {
    axios(`http://localhost:9000/requestedVolunteer/${user.email}`).then(
      (data) => {
        setRequestedUser(data.data);
        setCancelRequest(data.data);
      }
    );
  }, [user.email]);

  const handleCancel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:9000/requestedVolunteer/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Craft Item has been deleted.",
                icon: "success",
              });
              const remaining = requestedUser.filter((item) => item._id !== id);
              setCancelRequest(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 my-16">
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
              {cancelRequest.map((filter) => (
                <tr key={filter?._id}>
                  <td>{filter?.PostTitle}</td>
                  <td>{filter?.Category}</td>
                  <td>{new Date(filter.date).toLocaleDateString()}</td>
                  <td>
                    <button
                      onClick={() => handleCancel(filter._id)}
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
        {cancelRequest.length === 0 && (
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
            <Link to="/needVolunteer">
              <button className="rounded-md border text-black bg-[#7ec242] font-bold px-2 md:px-4 py-2  duration-300 hover:bg-gray-200">
                Be a Volunteer
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyVolunteerRequestPost;
