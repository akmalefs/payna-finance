import { useState } from "react";
import heroVideosImage from "../../../public/hero-videos.png";
import Button from "../Button";

const HeroVideos = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-6xl mx-auto my-24 lg:px-0 px-6">
      <div className="flex lg:flex-row flex-col gap-y-20 gap-x-32 items-center">
        <button onClick={() => setIsOpen(true)} className="focus:outline-none">
          <img
            src={heroVideosImage}
            alt="image with icon play video"
            width={635}
            height={450}
            className="cursor-pointer"
          />
        </button>
        <div className="flex flex-col gap-y-8 lg:items-start items-center">
          <header className="flex flex-col gap-y-1 lg:items-start lg:text-start items-center text-center">
            <h5 className="text-[#F75C4E] uppercase font-bold tracking-minus">
              Save more time
            </h5>
            <h1 className="text-navy text-4xl font-bold tracking-minus">
              And Boost Productivity
            </h1>
          </header>
          <p className="text-light tracking-minus leading-8 lg:w-10/12  w-8/12 lg:text-start text-center">
            Your employees can bring any success into your business, so we need
            to take care of them
          </p>

          <form className="flex items-center bg-[#F5F6FB] p-1 rounded-full w-full max-w-md">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 bg-transparent outline-none px-6 py-3 text-gray-600"
            />
            <Button variant="bg-primary text-white w-fit">Get Started</Button>
          </form>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md z-50">
          <div className="bg-white p-6 rounded-lg max-w-3xl w-full relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-0 right-1 text-gray-500 text-2xl font-bold cursor-pointer"
            >
              x
            </button>
            <iframe
              className="w-full h-96 rounded-lg"
              src="https://www.youtube.com/embed/3_wZ_1BSLiY"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroVideos;
