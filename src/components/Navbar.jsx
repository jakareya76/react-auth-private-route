import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="text-xl font-semibold">daisyUI</a>
        </div>
        <div className="flex-none">
          <ul className="gap-4 px-1 menu menu-horizontal">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            {user ? (
              <>
                <li className="px-4 my-2">{user.email}</li>

                <li>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
                <button onClick={logOut} className="btn btn-sm">
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/sign-up">Sign Up</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
