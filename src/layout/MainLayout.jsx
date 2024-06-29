import { Outlet, Link } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { IoPricetagOutline } from "react-icons/io5";
import { RiPriceTag2Fill } from "react-icons/ri";

const MainLayout = () => {
  return (
    <div className="bg-[#ecf1f8]">
      <header className="h-[90px] flex items-center  px-20 ">
        <nav className="flex justify-between w-full  list-none text-2xl">
          <ul>
            <li className="flex gap-4 items-center">
              <img
                src="./clinic.jpg"
                alt=""
                className="w-[80px] h-[80px] rounded-full object-cover "
              />
              <span className="font-fan text-4xl font-bold">DR. Abrham Menberu</span>
            </li>
          </ul>
          <ul className="flex gap-4 items-center ">
            <div className="bg-white rounded-full flex h-[3.4rem] ">
              <button className="flex gap-3  w-[10rem] hover:bg-[#0fff] rounded-full h-[2.9rem] items-center justify-center ">
                <GoHomeFill className="text-[#767676] " />
                <Link to="/" className="text-[#767676]  ">
                  Home
                </Link>
              </button>
              <button className="flex  w-[10rem] hover:bg-[#0fff] rounded-full h-[2.9rem] items-center justify-center  gap-2 ">
                <RiPriceTag2Fill className="text-[#767676]  " />
                <Link to="/about">About</Link>
              </button>
              <button className="flex  w-[10rem] hover:bg-[#0fff] rounded-full h-[2.9rem] items-center justify-center gap-2 ">
                <IoPricetagOutline className="text-[#767676] text-center" />
                <Link to="/about">Price</Link>
              </button>
            </div>
          </ul>
          <ul className="flex gap-4 items-center">
            <li>
              <button className="bg-[#0b74fa] w-[10.6rem] h-[3.3rem] rounded-full text-white">
                Get started
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>© 2024 My React App</p>
      </footer>
    </div>
  );
};

export default MainLayout;
