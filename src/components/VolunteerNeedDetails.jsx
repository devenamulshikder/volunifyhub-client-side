import { useLoaderData } from "react-router-dom";

const VolunteerNeedDetails = () => {
  const viewData = useLoaderData();
  return (
    <div className="max-w-7xl mx-auto my-8 md:my-12 lg:my-16">
      <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-center">
        View Details
      </h1>

      <div className="flex flex-col lg:flex-row gap-10 mt-8 p-4">
        <div className="flex-1 max-w-lg">
          <img src={viewData?.Thumbnail} alt="" />
        </div>
        <div className="space-y-3 flex-1">
          <h1 className="text-lg md:text-xl font-bold">
            {viewData?.PostTitle}
          </h1>

          <p className="text-sm md:text-lg font-bold w-full lg:w-2/3">
            Description :
            <span className="text-xs md:text-lg font-medium">
              {viewData?.description}
            </span>
          </p>
          <div className="space-y-3">
            <h1 className="text-sm md:text-lg font-semibold">
              Category: <span className="text-lg">{viewData?.Category}</span>
            </h1>
            <h1 className="text-xs md:text-lg font-semibold">
              Date: {new Date(viewData?.date).toLocaleDateString()}
            </h1>

            <h1 className="text-lg md:text-lg font-semibold">
              {" "}
              Location : {viewData?.Location}
            </h1>
            <h1 className="text-sm md:text-lg font-semibold"></h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerNeedDetails;
