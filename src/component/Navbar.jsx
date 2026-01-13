// import { Link, Route, Routes } from "react-router-dom";
// import Home from "../pages/Home";
// import Contact from "../pages/Contact";
// import Auth from "../pages/Auth";
// function Navbar(){
//     return(
//         <>
// <Link to="/home"> Home</Link>

// <Link to="/contact">Contact</Link>
// <Link to="/auth">Login</Link>
// {/* //{Login ? Logout:Login} */}

// <Routes>

//     <Route path="/home" element={<Home/>}/>
//     <Route path="/contact" element={<Contact/>}/>
//     <Route path="/auth" element={<Auth/>}/>

// </Routes>
//         </>
//     )
// }

// export default Navbar;

import { Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Auth from "../pages/Auth";
import { useContext } from "react";
import { AuthContext } from "../contaxt/AuthContext";

function Navbar() {
  const userName = localStorage.getItem("user");
  // converting sting into object
  const users = JSON.parse(userName);

  // 3 consueme the data using useContext hook
  let userData = useContext(AuthContext);

  console.log(userData, "this user data ");

  return (
    <>
      {/* High-Standard Industry Navbar */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo/Brand */}
            <div className="flex-shrink-0 flex items-center">
              <div className="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center mr-2 shadow-indigo-200 shadow-lg">
                <span className="text-white font-bold text-xs">P</span>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900">
                PRO<span className="text-indigo-600">DASH</span>
              </span>
            </div>

            {/* Navigation Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-sm font-semibold transition-all duration-200 ease-in-out"
              >
                Dashboard
              </Link>
              <Link
                to="/support"
                className="text-sm font-semibold text-slate-600  transition-all duration-200 ease-in-out"
              >
                Support
              </Link>
              {/* user name from local storage  */}
              🙎‍♂️ {users?.name}
              <div className="h-6w-[1px] bg-slate-200"></div>{" "}
              {/* Vertical Divider */}
              <Link
                to="/auth" 
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white bg-green-900 rounded-full"
             onClick={()=>{users && localStorage.removeItem("user")}}
              >
               {users?"Logout":" Sign In"}
               
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Logic preserved: Main Content Area */}
      <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/support" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </main>
    </>
  );
}

export default Navbar;
