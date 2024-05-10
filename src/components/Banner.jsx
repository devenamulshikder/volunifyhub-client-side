import first from "../assets/slider/slider1.jpg";
import second from "../assets/slider/slider2.jpg";
import third from "../assets/slider/slider3.jpg";
import { Fade } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <div >
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
      >
        <SwiperSlide>
          <div className="p-6 h-[40rem] w-full">
            <div className="-m-6 max-h-[768px] w-[calc(100%+0px)]">
              <div className="mt-16">
                <div className="flex flex-col mb-12 overflow-hidden text-gray-700 bg-white shadow-md  bg-clip-border">
                  <div className="absolute h-[38rem] w-full bg-gradient-to-r from-[#151515] to-[rgba(25,25,25,0)]">
                    <Fade duration={1000}>
                      <img
                        alt="nature"
                        className=" h-[38rem] w-full object-cover object-center brightness-50 "
                        src={first}
                      />
                    </Fade>
                  </div>
                </div>
                <div className=" relative ">
                  <h2 className="text-4xl lg:text-6xl ml-10 font-bold lato text-white text-center mt-32">
                
                      <p>
                        There is a Great Value For Doing <br />
                        Good to Others
                      </p>
                  
                  </h2>
                  <p className="text-xl lg:text-3xl mt-8 inter text-white text-center ml-10">
                    <span style={{ color: "#38b469", fontWeight: "bold" }}>
                      {/* Style will be inherited from the parent element */}
                      <Typewriter
                        words={[
                          "Welcome",
                          "This",
                          "Season ",
                          "with Our Sites!",
                        ]}
                        loop={5}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                      />
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
                  <p className="text-xl lg:text-3xl mt-8 inter text-white text-center ml-10">
                    <span style={{ color: "#38b469", fontWeight: "bold" }}>
                      {/* Style will be inherited from the parent element */}
                      <Typewriter
                        words={[
                          "Welcome",
                          "This",
                          "Season ",
                          "with Our Sites!",
                        ]}
                        loop={5}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                      />
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
                  <p className="text-xl lg:text-3xl mt-8 inter text-white text-center ml-10">
                    <span style={{ color: "#38b469", fontWeight: "bold" }}>
                      {/* Style will be inherited from the parent element */}
                      <Typewriter
                        words={[
                          "Welcome",
                          "This",
                          "Season ",
                          "with Our Sites!",
                        ]}
                        loop={5}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                      />
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
