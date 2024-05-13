/* eslint-disable react/no-unescaped-entities */

import { Zoom } from "react-awesome-reveal";

const VolunteersBrighter = () => {
  return (
    <div className="my-8 md:my-12 lg:my-16 text-center max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
        Volunteers Make Each Day Brighter
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 md:mt-12 lg:mt-16">
        <Zoom duration={1000}>
          <div className=" rounded-md shadow-md bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
            <img
              src="https://i.postimg.cc/tRfQR28s/login.jpg"
              alt=""
              className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500 dark:bg-gray-500"
            />
            <div className="flex flex-col justify-between p-6 space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-wide">
                  Clean and Recycle
                </h2>
                <p className="text-gray-100 dark:text-gray-800">
                  Everyone can be a changemaker. Here's how we got our start and
                  what we've accomplished
                </p>
              </div>
              <button className="font-semibold text-[#7ec242]">
                Read more...
              </button>
            </div>
          </div>
        </Zoom>
        <Zoom duration={1500}>
          <div className=" rounded-md shadow-md bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
            <img
              src="https://i.postimg.cc/zBGZvMJg/assignment1105.jpg"
              alt=""
              className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500 dark:bg-gray-500"
            />
            <div className="flex flex-col justify-between p-6 space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-wide">
                  Voluntary Support
                </h2>
                <p className="text-gray-100 dark:text-gray-800">
                  Corporate Days of Service are a great for team building and
                  giving back to the community.
                </p>
              </div>
              <button className="font-semibold text-[#7ec242]">
                Read more...
              </button>
            </div>
          </div>
        </Zoom>
        <Zoom duration={2000}>
          <div className=" rounded-md shadow-md bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
            <img
              src="https://i.postimg.cc/bJVXtTJF/assignment1106.jpg
"
              alt=""
              className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500 dark:bg-gray-500"
            />
            <div className="flex flex-col justify-between p-6 space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-wide">
                  Senior Services
                </h2>
                <p className="text-gray-100 dark:text-gray-800">
                  We are building a grassroots movement against marine debris by
                  helping facilitate educational.
                </p>
              </div>
              <button className="font-semibold text-[#7ec242]">
                Read more...
              </button>
            </div>
          </div>
        </Zoom>
        <Zoom duration={2500}>
          <div className=" rounded-md shadow-md bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
            <img
              src="https://i.postimg.cc/90svxQyd/register.jpg"
              alt=""
              className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500 dark:bg-gray-500"
            />
            <div className="flex flex-col justify-between p-6 space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-wide">
                  Save Earth
                </h2>
                <p className="text-gray-100 dark:text-gray-800">
                  We know you love the Earth and want to protect it. We've got
                  ideas for how you can help and fun facts.
                </p>
              </div>
              <button className="font-semibold text-[#7ec242]">
                Read more...
              </button>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default VolunteersBrighter;
