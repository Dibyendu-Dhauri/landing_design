import dashboard1 from "../assets/dashboard-1.png";
import dashboard2 from "../assets/dashboard-2.png";
import dashboard3 from "../assets/dashboard-3.png";
import rectangle1 from "../assets/Rectangle1.png";
import rectangle2 from "../assets/Rectangle2.png";
import rectangle3 from "../assets/Rectangle3.png";
import rectangle4 from "../assets/Rectangle4.png";
export default function Dashboard() {
  return (
    <div className=" lg:mx-32 flex flex-col  mt-12 ">
      <div className="  text-center  ">
        <button className="bg-blue-200 rounded-2xl text-blue-500 font-semibold text-lg px-4 py-2">
          Features
        </button>
      </div>

      <div className="font-semibold text-3xl text-center px-4 mt-6">
        Save 1000s of expensive coder hours
      </div>
      <div className="text-center mt-5 px-4 text-gray-500">
        With cloud native technologies, we assist in modernising infrastructure
        and applications for resilience and scalability.
      </div>

      <div className=" my-8 py-6 flex justify-center mx-2 relative  ">
        <div className="flex items-start  justify-start mr-1  ">
          <img src={rectangle1} alt="rectangle1" className=" lg:w-[90px] " />
          <img src={rectangle2} alt="rectangle2" className=" lg:w-[111px] " />
        </div>

        <div className="  ">
          <img
            src={dashboard1}
            alt="dashboard1"
            className="  lg:mb-20 lg:mt-8 shadow-lg w-[215px] h-[137px] lg:w-[767px] lg:h-[489px] "
          />
        </div>

        <div className="flex items-end  justify-start ml-1">
          <img src={rectangle3} alt="rectangle3" className="lg:w-[111px] " />
          <img src={rectangle4} alt="rectangle4" className=" lg:w-[90px] " />
        </div>
        <img
          src={dashboard2}
          alt="dashboard2"
          className="absolute bottom-0 left-8 w-[112px] h-[74px] lg:w-[383px] lg:h-[244px]"
        />
        <img
          src={dashboard3}
          alt="dashboard3"
          className=" absolute top-0 right-12 w-[84px] h-[55px] lg:w-[287px] lg:h-[183px]"
        />
      </div>
    </div>
  );
}
