const Features = () => {
  const featuresItem = [
    {
      id: 1,
      img: "./features/job.png",
      title: "Share Insights",
      description: "Working together with your team to make decisions",
    },
    {
      id: 2,
      img: "./features/tracker.png",
      title: "Track Leads",
      description: "See where your money goes and comes in business",
    },
    {
      id: 3,
      img: "./features/internet.png",
      title: "Offline Mode",
      description: "Use the feature while off from internet? sure can",
    },
    {
      id: 4,
      img: "./features/kanban.png",
      title: "Kanban Mode",
      description: "Organize the report that easy to be understand",
    },
    {
      id: 5,
      img: "./features/reward.png",
      title: "Reward System",
      description: "Motivate your team working harder and receive a gift",
    },
    {
      id: 6,
      img: "./features/world.png",
      title: "189 Country",
      description: "Working together worldwide people from anywhere",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-32 lg:px-0 px-6 items-center">
      <div className="flex flex-col gap-y-5 items-center text-center">
        <header className="flex flex-col gap-y-1">
          <h5 className="text-[#F75C4E] uppercase font-bold tracking-minus">
            Work Better
          </h5>
          <h1 className="text-navy text-4xl font-bold tracking-minus">
            For Your Business
          </h1>
        </header>
        <p className="text-light tracking-minus leading-8 w-[386px] mx-auto">
          We did research what your company needs and here we are providing all
          of them just for you
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mt-16 ">
        {featuresItem.map((item) => (
          <div key={item.id} className="flex items-start gap-x-6">
            <img src={item.img} alt="" width={60} height={60} />
            <div className="flex flex-col gap-y-3">
              <h4 className="text-navy font-semibold text-xl tracking-minus">
                {item.title}
              </h4>
              <p className="text-light tracking-minus leading-8 lg:w-10/12">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
