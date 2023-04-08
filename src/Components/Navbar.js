import React from "react";
import { Link } from "react-router-dom";
//Since Navbar is wrapped inside UserState it would be able to use the state provided by uUserContext API
import { useContext } from "react";
import UserContext from "../Context/User/userContext";

const Navbar = (props) => {
  const { userdata, setUserData } = useContext(UserContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/useStateHook">
                      UseState
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/useEffectHook">
                      UseEffect
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/useReducerHook">
                      UseReducer
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/useLocationHook:id">
                      UseLocation
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/useLocationHook2/userprofile?name=Adnan&email=12@gmail.com&qty=20"
                    >
                      UseLocation
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <div className="container">
              {userdata.name}
              <button
                className="btn-primary"
                onClick={() => {
                  !userdata.login
                    ? setUserData({
                        name: "Hero",
                        email: "Hiralal@gmail.com",
                        login: true,
                      })
                    : setUserData({
                        name: "",
                        email: "",
                        login: false,
                      });
                }}
              >
                {!userdata.login ? "Login" : "Logout"}
              </button>
              <p>{!userdata.login ? "User not logged in" : "User logged in"}</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
