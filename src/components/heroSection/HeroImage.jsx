import { PiHexagonThin } from "react-icons/pi";

const HeroImage = () => {
  return (
    <div className="relative self-end h-full w-full items-center justify-center sm:mt-4">
      <div className=" h-full w-full ">
        <img
          src="https://res.cloudinary.com/dlqldp4wi/image/upload/v1741534283/abidImg_xlybki.png"
          alt="abid saudagar"
          className="w-auto h-auto md:max-w-[570px] border-x-darkGrey  sm:max-w-[250px] absolute bottom-[0px] z-10 left-[50%] -translate-x-[50%]"
        />
        
      </div>
    </div>
  );
};

export default HeroImage;