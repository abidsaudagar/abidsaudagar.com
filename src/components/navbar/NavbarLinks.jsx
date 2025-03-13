import { Link } from "react-scroll";

const links = [
  { link: "About", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  return (
    <ul className="flex lg:flex-row sm:flex-col gap-6 lg:text-white sm:text-black font-special lg:relative sm:absolute sm:top-[120%] text-center sm:left-[50%] lg:left-[140%] -translate-x-[50%] lg:text-md sm:text-xl backdrop-blur-lg lg:bg-none sm:w-full py-1">
      {links.map((link, index) => {
        return (
          <li key={index} className="group">
            <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              to={link.section}
              className="cursor-pointer text-xl lg:text-white sm:text-black lg:hover:text-dutchWhite transition-all duration-500 font-body"
            >
              {link.link}
            </Link>
            <div className="mx-auto lg:bg-white sm:bg-black w-0 lg:group-hover:w-full sm:group-hover:w-[40%] h-[0.5px] transition-all duration-500"></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;