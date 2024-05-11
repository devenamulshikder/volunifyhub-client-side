import { Zoom } from "react-awesome-reveal";

const AboutUs = () => {
  return (
    <div
      className="bg-no-repeat min-w-full"
      style={{
        backgroundImage: "url(https://i.ibb.co/470mts4/assignment111.jpg)",
      }}
    >
      <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto p-4 lg:py-40">
        <div className="flex-1 max-w-lg pt-5 lg:pt-0">
          <Zoom duration={1500}>
            <img
              src="https://i.postimg.cc/zvysSgHD/assignment1109.jpg"
              alt=""
            />
          </Zoom>
        </div>
        <div className="flex-1 space-y-6 text-white">
          <p className="text-xl font-bold">-ABOUT US</p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            ABOUT US Together We Protect The Earth
          </h1>
          <p className="font-semibold">
            The United Nations suggests that climate change is not just the
            defining issue of our time, but we are also at a defining moment in
            history. Weather patterns are changing and will threaten food
            production, and sea levels are rising and could cause catastrophic
            flooding across the globe. Countries must make drastic actions to
            avoid a future with irreversible damage to major ecosystems and
            planetary climate.
          </p>
          <button className="p-2 rounded-xl bg-[#7ec242] hover:bg-slate-400">
            Learn More...
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
