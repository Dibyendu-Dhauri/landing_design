import rocket from "../assets/Rocket.svg";
import line from "../assets/Line 38.svg";
import cloud from '../assets/cloud.png'
export default function FirstProcess() {
  return (
    <div className=" mt-16 lg:mx-28 ">
      <div className="flex items-center justify-center pt-8">
        <span className="text-2xl font-bold mr-4 lg:text-4xl"> The Xerocodee way </span>
        <img src={rocket} alt="rocket" />
      </div>
      <div className="flex flex-col items-center justify-center mt-12">
        <p className="text-lg font-bold">01</p>
        <img src={line} alt="line" />
        <p className="font-bold mt-8 text-2xl">{"Self serve Infrastructure"}</p>
        <p className="text-center px-4 mt-4 text-gray-600">
          {
            " Accelerate by self-serving production-ready infrastructure and customize as you scale."
          }
        </p>
      </div>
      <div className="mt-12 flex  items-center  px-4 font-semibold text-xs mb-12 border-blue-200">
        <p className="border-b-2 border-blue-600 p-1 ">{"Your Cloud"}</p>
        <p className="border-2 p-1 mx-4">{"Infra components"}</p>
        <p className="border-2 p-1">{"Self-hosted Apps"}</p>
      </div>
      <div className="flex flex-col items-center justify-center lg:flex-row">
        <div className="lg:w-1/2 flex items-center justify-center">

        <img src={cloud} alt="cloud" />
        </div>
        <div className="flex flex-col lg:w-1/2  ">

        <p className="font-bold mt-4 text-center lg:text-start text-xl">{"In Your Cloud"}</p>
        <p className="px-4 mt-4 text-gray-600 text-center lg:text-start lg:pl-0">{"Your infrastructure runs on your AWS or GCP account. Never get locked in. Infinitely scalable.Azure support coming soon"}</p>
        </div>
      </div>
    </div>
  );
}
