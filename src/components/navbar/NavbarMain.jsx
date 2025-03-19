
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from './NavbarBtn'
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  return (
    <nav className="max-w-[95%] mx-auto w-full mt-3 px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 ">
      <div className="flex justify-between w-full max-w-[100%] mx-auto  bg-darkBlueM items-center p-2.5 rounded-r-full rounded-l-full  border-[0.5px] ">
        <NavbarLogo />
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>
     <NavbarBtn/>
      </div>
      <div className="flex lg:hidden sm:block p-2.5 bg-darkBlueM items-center justify-center rounded-full  border-[0.5px] ">
        <NavbarToggler className="sm:mr-4 xs:mr-2 "/>
      </div>
    </nav>
  );
};

export default NavbarMain;
