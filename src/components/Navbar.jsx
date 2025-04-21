// import React from "react";
// import { Link } from "react-router-dom";
// import SearchBar from "./SearchBar";
// import ToggleButton from "./ToggleButton";

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//       <div className="container-fluid">
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarContent"
//           aria-controls="navbarContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link" to="/">
//                 <i className="fas fa-home me-1"></i>
//                 My Books
//               </Link>
//             </li>
//           </ul>

//           <div className="d-flex">
//             <div className="me-3 my-auto">
//               <SearchBar />
//             </div>
//             <ToggleButton />
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import ToggleButton from "./ToggleButton";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <span className="fw-bold">BookFinder</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center" to="/">
                <span>My Books</span>
              </Link>
            </li>
          </ul>

          <div className="d-flex align-items-center ms-auto">
            <div className="me-3">
              <SearchBar />
            </div>
            <ToggleButton />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
