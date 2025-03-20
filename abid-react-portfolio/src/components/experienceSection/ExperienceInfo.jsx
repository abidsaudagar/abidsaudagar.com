
const ExperienceInfo = ({ number, text }) => {
    return (
      <div className="flex flex-col justify-center items-center">
        <p className="font-bold text-5xl text-darkGrey pb-2">{number}</p>
        <p className="font-bold text-xl text-darkGrey uppercase">{text}</p>
      </div>
    );
  };
  
  export default ExperienceInfo;
  