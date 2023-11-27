import logo from "../assets/logo.svg";
import github from "../assets/Github.svg";
import linkedIn from "../assets/Linkedin.svg";
import mail from "../assets/mail.svg";

export default function About() {
  return (
    <div className="mt-12 mx-2 mb-20 lg:mx-0 lg:bg-blue-100 lg:flex flex-col">
      <div className="lg:flex items-center justify-around lg:px-12 py-8">
        <div className="px-8 border-b border-black py-4 lg:pt-8 lg:border-none lg:w-1/3">
          <img src={logo} alt="logo" />
          <p className="mt-4">
            You get just what you need to run your cloud workloads--no more, no
            less. Deploy from our single pane of glass, manage them with ease
            and scale up as fast as your workload grows
          </p>
          <div className="mt-4 flex items-center">
            <img
              src={github}
              alt="github"
              className="bg-blue-200 rounded-full p-1 "
            />
            <img
              src={linkedIn}
              alt="linkedIn"
              className="mx-4 bg-gray-200 rounded-full p-1 "
            />
            <img
              src={mail}
              alt="mail"
              className="bg-gray-200 rounded-full p-1 "
            />
          </div>
        </div>

        <div className="px-8 mt-8 flex justify-between  lg:w-1/3">
          <div>
            <p className="font-bold text-xl mb-4">Our links</p>
            <div className="">
              <p className="mt-2">Home</p>
              <p className="mt-2">About us</p>
              <p className="mt-2">Integrations</p>
              <p className="mt-2">Team</p>
              <p className="mt-2">Blog</p>
            </div>
          </div>

          <div>
            <p className="font-bold text-xl mb-4 text-right lg:text-start">Others links</p>
            <div>
              <p className="mt-2 text-right lg:text-start">FAQ</p>
              <p className="mt-2 text-right lg:text-start">Careers</p>
              <p className="mt-2 text-right lg:text-start">Privacy Ploicy</p>
              <p className="mt-2 text-right lg:text-start">Trems & Condition</p>
              <p className="mt-2 text-right lg:text-start">Support</p>
            </div>
          </div>
        </div>

        <div className="px-8 mt-8 flex flex-col items-center justify-center border-b border-black lg:border-none py-4">
          <p className="font-bold text-2xl mb-4">Our Services</p>
          <div>
            <p className="mt-2 text-center">Infrastructure provisioning</p>
            <p className="mt-2 text-center">
              Network infrastructure automation
            </p>
            <p className="mt-2 text-center">Cost optimization</p>
            <p className="mt-2 text-center">Cloud migration</p>
            <p className="mt-2 text-center">Kubernetes at scale</p>
          </div>
        </div>
      </div>

      <div className="px-8 mt-8  py-4 lg:flex items-center justify-around">
        <p className="text-center mb-4">Terms & Condition | Privacy Policy </p>
        <p className="text-center mb-4">
          Copyright © 2023{" "}
          <span className="font-semibold">EXOCODE TECHNOLOGIES </span>
          All rights reserved
        </p>
      </div>
    </div>
  );
}
