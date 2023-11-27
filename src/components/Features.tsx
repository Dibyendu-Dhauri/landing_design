import infraImg from "../assets/infrastructure.png";
import security from "../assets/security.png";
import network from "../assets/network.png";
import application from "../assets/application.png";

export default function Features() {
  const featureData = [
    {
      id: 1,
      imgSrc: infraImg,
      title: "Infrastructure",
      subtitle: "Automated Cloud Infrastructure Workflow",
    },
    {
      id: 2,
      imgSrc: security,
      title: "Security",
      subtitle: "Modern Secure Infrastructure Approach",
    },
    {
      id: 3,
      imgSrc: network,
      title: "Networking",
      subtitle: "Flexible Secure Application Connectivity",
    },
    {
      id: 4,
      imgSrc: application,
      title: "Applications",
      subtitle: "Automate Application Deployment Agility",
    },
  ];
  return (
    <div className="mt-28">
      <div className="font-semibold text-3xl text-center px-4 mt-6">
      Self serve infrastructure platform for <span className="text-blue-400"> scaling teams</span> 
      </div>
      <div className="mt-8 flex flex-col items-center justify-center lg:flex-wrap lg:flex-row">
        {featureData.map((item) => (
          <div key={item.id} className="flex m-4   lg:w-1/3">
            <div className="mr-4 shadow-lg w-20 h-20 rounded-lg flex  items-center justify-center">
              <img src={item.imgSrc} className="w-14 " />
            </div>
            <div>
              <p className="font-bold">{item.title}</p>
              <p className="text-sm">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
