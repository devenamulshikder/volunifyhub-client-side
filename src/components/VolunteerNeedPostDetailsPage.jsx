/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import DatePicker from "react-datepicker";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

const VolunteerNeedPostDetailsPage = () => {
  const needVolunteerPost = useLoaderData();
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);

  const {
    userName,
    userEmail,
    PostTitle,
    Category,
    Location,
    date,
    No_of_volunteers_needed,
    Thumbnail,
    // description,
  } = needVolunteerPost;

  const handleBeAVolunteer = (event) => {
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

    const requestVolunteer = {
      userName,
      userEmail,
      PostTitle,
      Category,
      Location,
      date,
      No_of_volunteers_needed,
      Thumbnail,
      description,
      status:'Requested'
    };
    

    axios
      .post("http://localhost:9000/volunteerRequested", requestVolunteer)
      .then((data) => {
        if (data.data.insertedId) {
          form.reset("");
          toast.success("Successfully Craft Added!");
        }
      });

  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="my-8 md:my-12 lg:mt-16">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-center">
          Volunteer Need Post Details Page
        </h1>

        <div className="flex flex-col lg:flex-row gap-10 mt-8 lg:mt-24 lg:ml-16 p-4">
          <div className="flex-1 max-w-lg">
            <img src={needVolunteerPost?.Thumbnail} alt="" />
          </div>
          <div className="space-y-3 flex-1">
            <h1 className="text-lg md:text-xl font-bold">
              {needVolunteerPost?.PostTitle}
            </h1>

            <p className="text-sm md:text-lg font-bold w-full lg:w-2/3">
              Description :
              <span className="text-xs md:text-lg font-medium">
                {needVolunteerPost?.description}
              </span>
            </p>
            <div className="space-y-3">
              <h1 className="text-sm md:text-lg font-semibold">
                Category:{" "}
                <span className="text-lg">{needVolunteerPost?.Category}</span>
              </h1>
              <h1 className="text-xs md:text-lg font-semibold">
                Date: {new Date(needVolunteerPost?.date).toLocaleDateString()}
              </h1>

              <h1 className="text-lg md:text-lg font-semibold">
                {" "}
                Location : {needVolunteerPost?.Location}
              </h1>
              <h1 className="text-sm md:text-lg font-semibold">
                No. of volunteers needed :{" "}
                {needVolunteerPost?.No_of_volunteers_needed}
              </h1>

              <div className="flex justify-center">
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button
                  className="btn bg-[#7ec242] text-black hover:text-[#7ec242]"
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                >
                  Be a Volunteer
                </button>
                <dialog
                  id="my_modal_5"
                  className="modal modal-bottom sm:modal-middle"
                >
                  {" "}
                  <div className="modal-box">
                    <div className="modal-action">
                      <div className=" p-5 lg:p-10 rounded-xl">
                        <h1 className="text-4xl font-extrabold text-center mb-5">
                          Be a Volunteer..!
                        </h1>





                        <form onSubmit={handleBeAVolunteer}>
                          <div className="md:flex gap-5 mb-6">
                            <div className="md:w-1/2">
                              <label className="label"> Post Title</label>
                              <input
                                type="text"
                                name="PostTitle"
                                placeholder="Post Title"
                                defaultValue={PostTitle}
                                disabled
                                required
                                className="input input-bordered w-full"
                              />
                            </div>

                            <div className="md:w-1/2">
                              <label className="label">Category</label>
                              <select
                                type="text"
                                name="Category"
                                defaultValue={Category}
                                disabled
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
                                defaultValue={Location}
                                disabled
                                placeholder="Location"
                                required
                                className="input input-bordered w-full"
                              />
                            </div>

                            <div className="md:w-1/2">
                              <label className="label">Deadline</label>
                              <DatePicker
                                className="input input-bordered"
                                selected={date}
                                disabled
                                onChange={(date) => setStartDate(date)}
                              />
                            </div>
                          </div>
                          {/* form cetagory row  */}
                          <div className="md:flex gap-5 mb-6">
                            <div className="md:w-1/2">
                              <label className="label">
                                No. volunteers needed:
                              </label>
                              <input
                                type="number"
                                min={0}
                                name="needed"
                                placeholder="No. Of Volunteer Need"
                                required
                                defaultValue={No_of_volunteers_needed}
                                disabled
                                className="input input-bordered w-full"
                              />
                            </div>

                            <div className="md:w-1/2">
                              <label className="label">Thumbnail</label>
                              <input
                                type="text"
                                name="Thumbnail"
                                placeholder="Thumbnail"
                                defaultValue={Thumbnail}
                                disabled
                                required
                                className="input input-bordered w-full"
                              />
                            </div>
                          </div>

                          {/* Current User */}
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

                          {/* Organizer */}

                          <div className="md:flex gap-5 mb-6">
                            <div className="md:w-1/2">
                              <label className="label">Organizer Name</label>
                              <input
                                defaultValue={userName}
                                type="text"
                                disabled
                                className="input input-bordered w-full"
                              />
                            </div>
                            <div className="md:w-1/2">
                              <label className="label">Organizer Email</label>
                              <input
                                type="text"
                                defaultValue={userEmail}
                                disabled
                                placeholder="Enter processing time (hour)"
                                className="input input-bordered w-full"
                              />
                            </div>
                          </div>

                          {/* photo url*/}
                          <div className="mb-6">
                            <label>Suggestion</label>
                            <textarea
                              className="textarea textarea-bordered w-full"
                              name="description"
                              required
                              placeholder="Have you any suggestion..?"
                            ></textarea>
                          </div>
                          <input
                            type="submit"
                            value="Request"
                            className="btn btn-block text-black hover:text-[#7ec242] bg-[#7ec242]"
                          />
                        </form>
                      </div>
                    </div>
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn  ">Close</button>
                    </form>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerNeedPostDetailsPage;
