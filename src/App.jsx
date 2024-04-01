import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-2">
        <Outlet />
      </main>
    </>
  );
};

export default App;
