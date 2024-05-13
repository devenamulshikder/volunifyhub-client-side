import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import toast from "react-hot-toast";
import { AuthContext } from "../provider/AuthProvider";

import "react-datepicker/dist/react-datepicker.css";
// import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdatePage = () => {
  const data = useLoaderData();
const navigate = useNavigate()
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
  const handleAddVolunteerItem = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = user.displayName;
    const userEmail = user.email;

    const PostTitle = form.PostTitle.value;
    const Category = form.Category.value;

    const Location = form.Location.value;
    const date = startDate;

    const No_of_volunteers_needed = form.needed.value;
    const Thumbnail = form.Thumbnail.value;

    const description = form.description.value;

    const updateVolunteer = {
      userName,
      userEmail,
      PostTitle,
      Category,
      Location,
      date,
      No_of_volunteers_needed,
      Thumbnail,
      description,
    };

    fetch(`http://localhost:9000/updatePage/${data?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateVolunteer),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Successfully Volunteer Updated!");
          navigate("/manageMyPost/:email");
        }

      })
      .catch(err=>toast.error(err))

  };

  return (
    <div className=" max-w-7xl mx-auto p-5 lg:p-10 rounded-xl mt-8 lg:mt-16">
      <h1 className="text-4xl font-extrabold text-center mb-5">
        Update Volunteer Page
      </h1>
      <form onSubmit={handleAddVolunteerItem}>
        <div className="md:flex gap-5 mb-6">
          <div className="md:w-1/2">
            <label className="label"> Post Title</label>
            <input
              type="text"
              name="PostTitle"
              placeholder="Post Title"
              defaultValue={data.PostTitle}
              required
              className="input input-bordered w-full"
            />
          </div>

          <div className="md:w-1/2">
            <label className="label">Category</label>
            <select
              type="text"
              name="Category"
              defaultValue={data.Category}
              required
              className=" p-3 rounded-lg border w-full"
            >
              <option>Healthcare</option>
              <option>Education</option>
              <option>Social service</option>
              <option>Animal welfare</option>
            </select>
          </div>
        </div>
        <div className="md:flex gap-5 mb-6">
          <div className="md:w-1/2">
            <label className="label">Location</label>
            <input
              type="text"
              name="Location"
              defaultValue={data.Location}
              placeholder="Location"
              required
              className="input input-bordered w-full"
            />
          </div>

          <div className="md:w-1/2">
            <label className="label">Deadline</label>
            <DatePicker
              className="input input-bordered"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              defaultValue={data.date}
            />
          </div>
        </div>
        {/* form cetagory row  */}
        <div className="md:flex gap-5 mb-6">
          <div className="md:w-1/2">
            <label className="label">No. of volunteers needed :</label>

            <input
              type="number"
              min={0}
              name="needed"
              placeholder="No. Of Volunteer Need"
              required
              defaultValue={data.No_of_volunteers_needed}
              className="input input-bordered w-full"
            />
          </div>

          <div className="md:w-1/2">
            <label className="label">Thumbnail</label>
            <input
              type="text"
              name="Thumbnail"
              placeholder="Thumbnail"
              defaultValue={data.Thumbnail}
              required
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div className="md:flex gap-5 mb-6">
          <div className="md:w-1/2">
            <label className="label">User Name</label>
            <input
              defaultValue={user?.displayName}
              type="text"
              disabled
              className="input input-bordered w-full"
            />
          </div>
          <div className="md:w-1/2">
            <label className="label">User email</label>
            <input
              type="text"
              defaultValue={user?.email}
              disabled
              placeholder="Enter processing time (hour)"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* photo url*/}
        <div className="mb-6">
          <label>Description</label>
          <textarea
            className="textarea textarea-bordered w-full"
            name="description"
            required
            defaultValue={data.description}
            placeholder="Sort Description"
          ></textarea>
        </div>
        <input
          type="submit"
          value="Update Volunteer"
          className="btn btn-block text-black bg-[#7ec249]  hover:bg-[#7ec242]"
        />
      </form>
    </div>
  );
};

export default UpdatePage;
