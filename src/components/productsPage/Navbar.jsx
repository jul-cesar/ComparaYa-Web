import React, { useContext, useState } from "react";

import { SidebarContext } from "../../context/sidebarContext";
import { Auth } from "../../context/authContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SheetDemo } from "../demo/SheetDemo";
import { Button } from "../ui/button";

function Navbar() {
  const [openMenuProfile, setOpenMenuProfile] = useState(false);

  const location = useLocation()

  const { openSidebar, setOpenSidebar } = useContext(SidebarContext);
  const { logOut, currentUser } = useContext(Auth);
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      await logOut();
      setOpenMenuProfile(!openMenuProfile)
      navigate(location.pathname);
      console.log("ur loggedout");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              onClick={() => setOpenSidebar(!openSidebar)}
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
            <a href="" className="flex ms-2 md:me-24">
              {/* <div className="flex items-center justify-center ">
                {" "}
                <img
                  src={logo}
                  alt="Company Logo"
                  className="max-h-14 w-20 sm:h-16 md:h-20 lg:h-20 object-cover"
                />
                <img
                  src={textlogo}
                  alt="Company Text Logo"
                  className="h-12 w-56 sm:h-13.5 md:h-13 lg:h-13 object-cover"
                />
              </div> */}
            </a>
          </div>
          <div className="flex items-center">
            {!currentUser && <Link to={"/login"}><Button>Inicia Sesion</Button> </Link> }
            {currentUser && <SheetDemo />}
            <div className="flex items-center ms-3">
              <div>
                {currentUser && <button
                  onClick={() => setOpenMenuProfile(!openMenuProfile)}
                  type="button"
                  className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown-user"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
                    alt="user photo"
                  />
                </button>}
              </div>

              <div
                className={`absolute right-0 top-16 m-2 z-50 ${!openMenuProfile ? "hidden" : "block"
                  } text-base list-none bg-white divide-y divide-gray-100 rounded shadow`}
                id="dropdown-user"
              >
                <div className="px-4 py-3" role="none">
                  <p className="text-sm text-gray-900" role="none">
                    Comparaya
                  </p>
                  <p
                    className="text-sm font-medium text-gray-900 truncate"
                    role="none"
                  >
                    {currentUser?.email}
                  </p>
                </div>
                <ul className="py-1" role="none">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                      role="menuitem"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={handleLogOut}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default React.memo(Navbar);
