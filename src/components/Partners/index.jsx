const Partner = () => {
  const imagesFileNames = ["apple", "adobe", "slack", "spotify", "google"];

  return (
    <div className="max-w-7xl mx-auto mt-24 lg:px-0 px-6 ">
      <div className="flex lg:flex-row flex-col  gap-y-8 justify-between lg:items-center items-start">
        <h5 className="text-navy tracking-minus font-semibold lg:w-2/12">
          Trusted by Global Companies
        </h5>

        <div className="flex gap-x-12 flex-wrap gap-y-8">
          {imagesFileNames.map((imageFileName) => (
            <img
              key={imageFileName}
              src={`${imageFileName}.png`}
              alt={`${imageFileName} logo`}
              className="h-8"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partner;
