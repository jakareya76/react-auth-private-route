import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  const handleSignOut = () => {
    signOut(auth);
  };

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
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/sign-up">Sign Up</NavLink>
            </li>
          </ul>
          {user && <span className="px-4">{user.email}</span>}
          <button onClick={handleSignOut} className="btn">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
