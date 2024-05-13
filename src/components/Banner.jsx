import first from "../assets/slider/slider1.jpg";
import second from "../assets/slider/slider2.jpg";
import third from "../assets/slider/slider3.jpg";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
      >
        <SwiperSlide>
          <div className="p-6 h-[42rem] w-full">
            <div className="-m-6 max-h-[768px] w-[calc(100%+0px)]">
              <div className="mt-16">
                <div className="flex flex-col mb-12 overflow-hidden text-gray-700 bg-white shadow-md  bg-clip-border">
                  <div className="absolute h-[38rem] w-full bg-gradient-to-r from-[#151515] to-[rgba(25,25,25,0)]">
                    <img
                      alt="nature"
                      className=" h-[38rem] w-full object-cover object-center brightness-50 "
                      src={first}
                    />
                  </div>
                </div>
                <div className=" relative ">
                  <h2 className="text-4xl lg:text-6xl ml-10 font-bold lato text-white text-center mt-32">
                    <p>
                      There is a Great Value For Doing <br />
                      Good to Others
                    </p>
                  </h2>
                  <p className=" mt-8 inter text-gray-300 text-center ml-10">
                    <span>
                      {/* Style will be inherited from the parent element */}
                      A volunteer recognition speech should also highlight the
                      achievements of <br />
                      your volunteers and your organization. You can use
                      statistics, awards, or milestones <br /> to show how your
                      volunteers have helped you reach your goals and fulfill
                      your mission.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-6 h-[40rem] w-full">
            <div className="-m-6 max-h-[768px] w-[calc(100%+0px)]">
              <div className="mt-16">
                <div className="flex flex-col mb-12 overflow-hidden text-gray-700 bg-white shadow-md  bg-clip-border">
                  <div className="absolute h-[38rem] w-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <img
                      alt="nature"
                      className="h-[38rem] w-full object-cover object-center brightness-50"
                      src={second}
                    />
                  </div>
                </div>
                <div className=" relative ">
                  <h2 className="text-4xl lg:text-6xl ml-10 font-bold inter text-white text-center mt-32">
                    There is a Great Value For Doing <br /> Good to Others
                  </h2>
                  <p className=" mt-8 inter text-gray-300 text-center ml-10">
                    <span>
                      {/* Style will be inherited from the parent element */}
                      A volunteer recognition speech should also highlight the
                      achievements of <br />
                      your volunteers and your organization. You can use
                      statistics, awards, or milestones <br /> to show how your
                      volunteers have helped you reach your goals and fulfill
                      your mission.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-6 h-[40rem] w-full">
            <div className="-m-6 max-h-[768px] w-[calc(100%+0px)]">
              <div className="mt-16">
                <div className="flex flex-col mb-12 overflow-hidden text-gray-700 bg-white shadow-md  bg-clip-border">
                  <div className="absolute h-[38rem] w-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <img
                      alt="nature"
                      className="h-[38rem] w-full object-cover object-center brightness-50"
                      src={third}
                    />
                  </div>
                </div>
                <div className=" relative ">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl ml-10 font-bold inter text-white text-center mt-32">
                    There is a Great Value For Doing <br /> Good to Others
                  </h2>
                  <p className=" mt-8 inter text-gray-300 text-center ml-10">
                    <span>
                      {/* Style will be inherited from the parent element */}
                      A volunteer recognition speech should also highlight the
                      achievements of <br />
                      your volunteers and your organization. You can use
                      statistics, awards, or milestones <br /> to show how your
                      volunteers have helped you reach your goals and fulfill
                      your mission.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
