import { Outlet, Link } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { IoPricetagOutline } from "react-icons/io5";
import { RiPriceTag2Fill } from "react-icons/ri";
import { AiFillTikTok } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import Map from "../components/Map";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";

const MainLayout = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleCloseMenu = () => {
    setShowMenu(false)
  }
  return (
    <div className="bg-[#ecf1f8] w-screen overflow-hidden">
      <header className="h-[90px] flex items-center  px-20  ">
        <nav className="flex justify-between w-[100%] bg-[#ecf1f8] list-none text-2xl fixed lg:mx-[5%] top-0 left-0 ">
          <ul>
            <li className="flex gap-4 items-center">
              <img
                src="./logon.png"
                alt=""
                className="w-[100px] h-[100px] rounded-full object-contain "
              />
              <span className="font-fan lg:text-4xl font-bold">
                DR. Abrham Menberu Clinic
              </span>
            </li>
          </ul>
          {/* for small device */}
          <ul className="lg:flex lg:gap-4 lg:items-center hidden  ">
            <div className="bg-white rounded-full flex h-[3.4rem] ">
              <button className="flex gap-3  w-[10rem] hover:bg-[#0fff] rounded-full h-[2.9rem] items-center justify-center ">
                <GoHomeFill className="text-[#767676] " />
                <a href="#home">Home</a>
              </button>
              <button className="flex  w-[10rem] hover:bg-[#0fff] rounded-full h-[2.9rem] items-center justify-center  gap-2 ">
                <RiPriceTag2Fill className="text-[#767676]  " />
                <a href="#about">About</a>
              </button>
              <button className="flex  w-[10rem] hover:bg-[#0fff] rounded-full h-[2.9rem] items-center justify-center gap-2 ">
                <IoPricetagOutline className="text-[#767676] text-center" />
                <Link to="#about">Price</Link>
              </button>
            </div>
          </ul>
          <ul className="lg:flex lg:gap-4 lg:items-center hidden">
            <li>
              <a href="#start">
                <button className="bg-[#0b74fa] w-[10.6rem] h-[3.3rem] rounded-full text-white">
                  Get started
                </button>
              </a>
            </li>
          </ul>
          {/* small screen menu */}
          <div className="p-5">
            <button onClick={handleShowMenu}>
              <TiThMenu className="lg:hidden text-4xl text-green-600" />
            </button>
          </div>
        </nav>

        <div
          className={`fixed bg-green-900 h-[100vh] z-50  bottom-0 left-0 top-0 transition-transform duration-700 ease-in-out ${
            showMenu ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {showMenu ? (
            <div className=" flex flex-col ">
              <button
                onClick={handleCloseMenu}
                className="flex gap-3  w-[10rem] hover:bg-[#0fff] rounded-full h-[2.9rem] items-center justify-center "
              >
                <GoHomeFill className="text-[#767676] " />
                <a href="#home">Home</a>
              </button>
              <button
                onClick={handleCloseMenu}
                className="flex  w-[10rem] hover:bg-[#0fff] rounded-full h-[2.9rem] items-center justify-center  gap-2 "
              >
                <RiPriceTag2Fill className="text-[#767676]  " />
                <a href="#about">About</a>
              </button>
              <button
                onClick={handleCloseMenu}
                className="flex  w-[10rem] hover:bg-[#0fff] rounded-full h-[2.9rem] items-center justify-center gap-2 "
              >
                <IoPricetagOutline className="text-[#767676] text-center" />
                <Link to="#about">Price</Link>
              </button>
            </div>
          ) : null}
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="bg-[#0b74fa] lg:h-[35rem] md:h-[42rem] h-[45rem] md:p-10 p-4 mt-4 md:mt-0  rounded-t-[2rem]  ">
        <div className="md:grid md:grid-cols-2 md: gap10 relative ">
          <div className="md:w-[80%]">
            <h1 className="font-fan lg:text-6xl text-2xl text-center md:text-5xl  lg:leading-[80px] font-bold text-white">
              Smart diagnosis for healthier tommorow!!!
            </h1>
          </div>
          <div className="hidden md:block">
            <h1 className=" text-white md:text-3xl font-fan text-xl capitalize ">
              Follow us
            </h1>
            <div className="pt-6">
              <div className="flex gap-3 items-center">
                <AiFillTikTok className="text-white md:text-3xl text-xl" />
                TikTok
              </div>
              <div className="flex gap-3 items-center py-4">
                <FaTelegram className="text-white md:text-3xl text-xl" />{" "}
                Telegram
              </div>
            </div>
          </div>
          <div className="md:pt-10">
            <h1 className="md:text-3xl font-fan text-xl capitalize text-white">
              contact us
            </h1>
            <div className="md:p-5">
              <p>Phone: 1234567890</p>
              <p>Email: 0XUzF@example.com</p>
            </div>
          </div>
          <div className="hidden md:block pt-10">
            <h1 className=" text-white font-fan md:text-3xl text-xl capitalize  ">
              Go to
            </h1>
            <div className="flex flex-col md:gap-3 md:pt-5">
              <a href="#home" className="text-white">
                Home
              </a>
              <a href="#about" className="text-white">
                About
              </a>
            </div>
          </div>
          <div className="absolute right-0 md:ml-10 lg:ml-0 ">
            <Map />
          </div>
        </div>

        <div className="pt-[500px] md:pt-24 ">
          <hr />
          <p>© 2024 DR. Abrham Menberu clinic</p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
