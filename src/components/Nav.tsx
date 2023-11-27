import Logo from "../assets/logo.svg";
export default function Nav() {
  return (
    <div className="px-4 lg:px-12 lg:py-8 ">

    <div className="navbar bg-base-100 border-b lg:shadow-lg lg:border lg:rounded-md ">
      <div className="navbar-start">
        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
        <img src={Logo} alt="logo" className="lg:pl-16"/>
      </div>
      <div className="navbar-center hidden lg:flex md:flex  ">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Team</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <a>Careers</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end lg:pr-20">
        <a className="btn border-2 px-8 text-blue-500 border-blue-500 invisible md:visible lg:visible">
          Sign In
        </a>
        <div className="dropdown dropdown-end lg:hidden md:hidden">
          <label tabIndex={0} className="btn btn-ghost ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Team</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>Careers</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}
