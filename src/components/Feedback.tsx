import leftArrow from "../assets/left.svg";
import rightArrow from "../assets/right.svg";
import avatar from "../assets/avatar.svg";
import avatar1 from '../assets/avatar1.jpg'
import avatar2 from '../assets/avatar2.jpg'
import avatar3 from '../assets/avatar3.jpg'
import avatar4 from '../assets/avatar4.jpg'

import { useState } from "react";

export default function Feedback() {
  const [index, setIndex] = useState(1)

  const feedbackData = [
    {
      id:1,
      imgSrc:avatar,
      username: "JohnDoe",
      designation: "Software Engineer",
      feedback: "Great experience working with the team. The project was delivered on time, and the quality of the code is excellent."
    },
    {
      id:2,
      imgSrc:avatar1,
      username: "JaneSmith",
      designation: "UX Designer",
      feedback: "Jane is a creative and talented designer. Her attention to detail and innovative ideas greatly contributed to the success of our product."
    },
    {
      id:3,
      imgSrc:avatar2,
      username: "AlexJohnson",
      designation: "Marketing Specialist",
      feedback: "Alex has a deep understanding of market trends. His marketing strategies have significantly increased our brand visibility and customer engagement."
    },
    {
      id:4,
      imgSrc:avatar3,
      username: "EmilyDavis",
      designation: "Project Manager",
      feedback: "Emily is an exceptional project manager. Her organizational skills and effective communication ensured smooth project delivery and client satisfaction."
    },
    {
      id:5,
      imgSrc:avatar4,
      username: "ChrisMiller",
      designation: "Data Scientist",
      feedback: "Chris's analytical skills are outstanding. His insights from data analysis have provided valuable information for decision-making within our organization."
    }
  ]

  const handleClick = (direction:string)=>{
    if(direction === "right" && index < 4) {
      setIndex(prev=>prev+1)
    } 
    else if(direction === "left" && index > 0) {
     setIndex(prev=> prev-1)
    }
  }
  
  return (
    <div className="mx-2 mt-12 lg:mx-32 lg:mt-28 mb-12">
      <div className="pt-6">
        <p className="text-center text-xl font-bold lg:text-5xl">
          {"See Our Success Stories"}
        </p>
      </div>
      <div className="flex items-center ">
        <img
          src={leftArrow}
          alt="leftArrow"
          className="bg-blue-600 w-4 h-4 rounded-full p-1 mb-36 lg:mb-0 lg:w-12 lg:h-10 lg:p-2 cursor-pointer"
          onClick={()=>handleClick("left")}
        />

        <div className="mt-12 flex flex-col lg:flex-row-reverse  lg:border-transparent lg:mx-8 lg:shadow-2xl lg:rounded-l-3xl  ">
          <div className="avatar flex items-center justify-center lg:p-8">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={feedbackData[index].imgSrc} />
            </div>
          </div>

          <div className="  flex  ">
            <p
              className="text-5xl font-bold text-blue-600 lg:w-1/3 lg:bg-blue-600 lg:text-white
          lg:flex items-center justify-center lg:text-9xl lg:rounded-l-3xl"
            >
              {"“"}
            </p>
            <div className="lg:p-8 mt-4">
              <p className="lg:text-xl">
                {/* {
                  "There are many variations of passages of Lorem Ipsum available but the majority have sufferg alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage."
                } */}
                {feedbackData[index].feedback}
              </p>
              <p className="text-center  mt-4 font-bold lg:text-end lg:text-xl">
                {/* {"-Jhon Kelaven"} */}
                {feedbackData[index].username}
              </p>
              <p className="text-center  mt-1 lg:text-end lg:text-xl">
                {/* {"Creative designer"} */}
                {feedbackData[index].designation}
              </p>
            </div>
          </div>
        </div>

        <img
          src={rightArrow}
          alt="rightArrow"
          className="bg-blue-600 w-4 h-4 rounded-full p-1 mb-36 lg:mb-0 lg:w-12 lg:h-10 lg:p-2 cursor-pointer"
          onClick={()=>handleClick("right")}
        />
      </div>
    </div>
  );
}
