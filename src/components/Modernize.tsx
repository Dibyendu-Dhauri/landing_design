import collaboration from "../assets/collaboration.png";
import realTime from "../assets/real-time.png";

export default function Modernize() {
  const modernizeData = [
    {
      id: 1,
      imgSrc: realTime,
      title: "Real-time risk monitoring",
      subTitle:
        "Real-time risk monitoring across your infrastructure and application ecosystem will help you maintain ongoing compliance with more than 05+ different regulatory standards.",
    },
    {
      id: 2,
      imgSrc: collaboration,
      title: "Collaborative workflows",
      subTitle:
        "Share artefacts easily and collaborate with team members, auditors, and pen testers via automated procedures. To manage daily compliance with automatic notifications and reminders, create, assign, and track tasks.",
    },
  ];
  return (
    <div className="mt-20 bg-blue-600 rounded-3xl mx-2 pb-4 lg:mx-32">
      <div className="font-semibold text-3xl text-center px-4 pt-10 text-white lg:px-20 lg:text-4xl ">
        Modernize apps, infrastructure with cloud native tech for resilience,
        scalability.
      </div>

      <div className="px-4 mt-8 lg:flex flex-col ">
        {modernizeData.map((item,index) => (
          <div key={item.id} className= {`mb-8 lg:flex ${index % 2 === 0 ? "": "flex-row-reverse"}`} >
            <div className="lg:w-1/2 lg:ml-14">
              <img src={item.imgSrc} />
            </div>
            <div className="text-white text-center mt-4 lg:w-1/3">
                  <p className="font-bold text-2xl mb-4 lg:text-4xl">{item.title}</p>
                  <p className="lg:text-lg">{item.subTitle}</p>
                </div>
          </div>
        ))}
      </div>
    </div>
  );
}
