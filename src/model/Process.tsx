import FirstProcess from "../components/FirstProcess";
import SecondProcess from "../components/SecondProcess";
import ThirdProcess from "../components/ThirdProcess";


export default function Process() {
  return (
    <>
    <div className=" mx-2 rounded-lg mt-8 border-black border lg:mx-32">

    <FirstProcess/>
    <SecondProcess/>
    <ThirdProcess/>
    </div>
    </>
  )
}
