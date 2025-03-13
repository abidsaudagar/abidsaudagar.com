const NavbarLogo = () => {
    return (
      <div>
        <h1 className="text-white text-2xl sm:hidden md:block">
          <img src='https://res.cloudinary.com/dlqldp4wi/image/upload/v1741516559/abidLogo_t1ti9w.jpg' alt="logo" class="h-[60px] ml-5 rounded-full"/>
        </h1>
        <h1 className="text-white font-special font-extrabold text-4xl md:hidden sm:block">
        <img src='../../public/images/abidLogo.jpg' alt="logo" class="h-[50px] ml-4 rounded-full"/>
        </h1>
      </div>
    );
  };
  
  export default NavbarLogo;