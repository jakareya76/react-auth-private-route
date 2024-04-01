import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="text-xl font-semibold">daisyUI</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 gap-4">
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
