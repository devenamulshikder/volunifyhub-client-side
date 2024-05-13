import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import toast from "react-hot-toast";
import { AuthContext } from "../provider/AuthProvider";

import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useLoaderData, useParams } from "react-router-dom";

const UpdatePage = () => {
  const data = useLoaderData();
  const { id } = useParams();

  console.log(data, id);

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

    // axios
    //   .post("http://localhost:9000/volunteerPost", newVolunteer)

    //   .then((data) => {
    //     if (data.data.insertedId) {
    //       form.reset("");
    //       toast.success("Successfully Craft Added!");
    //     }
    //   });

    axios
      .put(`http://localhost:9000/updatePage/${id}`, updateVolunteer)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          toast.success("sufodsjf");
        } else {
          toast.error("Already Added Updated");
        }
      });
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
              required
              className="input input-bordered w-full"
            />
          </div>

          <div className="md:w-1/2">
            <label className="label">Category</label>
            <select
              type="text"
              name="Category"
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
              className="input input-bordered w-full"
            />
          </div>

          <div className="md:w-1/2">
            <label className="label">Thumbnail</label>
            <input
              type="text"
              name="Thumbnail"
              placeholder="Thumbnail"
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
            placeholder="Sort Description"
          ></textarea>
        </div>
        <input
          type="submit"
          value="Update Volunteer"
          className="btn btn-block bg-[#7ec242]"
        />
      </form>
    </div>
  );
};

export default UpdatePage;