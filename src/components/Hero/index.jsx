import Button from "../Button";
import heroImage from "../../../public/hero-image.png";

const Hero = () => {
  return (
    <div className="max-w-6xl mx-auto mt-24 lg:px-0 px-6">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-y-8">
          <header className="flex flex-col gap-y-5">
            <h1 className="font-bold text-navy text-6xl tracking-minus leading-tight">
              Manage Payroll Like an Expert
            </h1>
            <p className="text-light tracking-minus leading-8 w-8/12">
              Payna is helping you to setting up the payroll without required
              any finance skills or knowledge before
            </p>
          </header>

          <Button variant="bg-primary text-white w-fit">Get Started</Button>


        </div>

        <img src={heroImage} alt="Hero Image Static Company" className="lg:block hidden" width={685} height={400} />
      </div>
    </div>
  );
};

export default Hero;
