import { useLoaderData } from "react-router-dom";


const VolunteerNeedPostDetailsPage = () => {
    const needVolunteerPost = useLoaderData()
    console.log(needVolunteerPost);
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
                  No_of_volunteers_needed :{" "}
                  {needVolunteerPost?.No_of_volunteers_needed}
                </h1>
                <div className="flex justify-center">
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                  <button
                    className="btn"
                    onClick={() =>
                      document.getElementById("my_modal_5").showModal()
                    }
                  >
                    open modal
                  </button>
                  <dialog
                    id="my_modal_5"
                    className="modal modal-bottom sm:modal-middle"
                  >
                    <div className="modal-box">
                      <h3 className="font-bold text-lg">Hello!</h3>
                      <p className="py-4">
                        Press ESC key or click the button below to close
                      </p>
                      <div className="modal-action">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn">Close</button>
                        </form>
                      </div>
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