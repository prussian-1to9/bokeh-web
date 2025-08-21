import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div
    // className="dark:*:bg-gray-900 dark:text-white flex flex-col items-center h-screen w-screen"
    >
      <header className="w-full flex justify-between p-4 backdrop-blur-md ">
        <img src="/bokeh.png" alt="BOKEH" />
        <ul className="flex justify-center items-center">
          <li className="hover:underline min-w-16 text-center">
            <Link to="/">Bokeh</Link>
          </li>
          <li className="hover:underline min-w-16 text-center">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:underline min-w-16 text-center">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Home;
