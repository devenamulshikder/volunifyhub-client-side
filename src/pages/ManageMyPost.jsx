import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import { MdBrowserUpdated } from "react-icons/md";
import { FcDeleteDatabase } from "react-icons/fc";
import Swal from "sweetalert2";
import MyVolunteerRequestPost from "../components/MyVolunteerRequestPost";
import { Helmet } from "react-helmet-async";
const ManageMyPost = () => {
  const { user } = useContext(AuthContext);

  const [filters, setFilter] = useState([]);

  const [myList, setMyList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9000/manageMyPost/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setFilter(data);
        setMyList(data);
      });
  }, [user.email]);

  const handleDelete = (id) => {
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
        fetch(`http://localhost:9000/updatePage/${id}`, {
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
              const remaining = filters.filter((item) => item._id !== id);
              setMyList(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <Helmet>
        <title>Volunify || Manage My Post</title>
      </Helmet>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center my-12 md:my-12 lg:my-16">
        My Need Volunteer Post
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-lg">
            <tr>
              <th>Post Title</th>
              <th>Category</th>
              <th>Date</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myList.map((filter) => (
              <tr key={filter?._id}>
                <td>{filter?.PostTitle}</td>
                <td>{filter?.Category}</td>
                <td>{new Date(filter.date).toLocaleDateString()}</td>
                <td>
                  <button className="btn bg-[#7ec242] text-black hover:text-[#7ec242]">
                    <Link
                      to={`/updatePage/${filter._id}`}
                      className="flex gap-1"
                    >
                      <MdBrowserUpdated />
                      Update
                    </Link>
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(filter._id)}
                    className="btn bg-[#7ec242] text-black hover:text-[#7ec242]"
                  >
                    <Link className="flex gap-1">
                      <FcDeleteDatabase />
                      Delete
                    </Link>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {filters.length === 0 && (
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
            <button className="rounded-md border bg-[#7ec242] text-black font-bold px-2 md:px-4 py-2  duration-300 hover:bg-gray-200">
              Add Volunteer Post
            </button>
          </Link>
        </div>
      )}

      <MyVolunteerRequestPost />
    </div>
  );
};

export default ManageMyPost;
