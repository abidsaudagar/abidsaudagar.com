const SingleSkill = ({ imgSvg, text }) => {
    return (
      <div className="hover:-translate-y-10 transition-all duration-500">
        <div className="flex flex-col items-center gap-2 relative">
          <div className="bg-ashM text-darkBlueM h-[100px] w-[100px] flex items-center justify-center rounded-full hover:text-black hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-darkBlueM">
            {imgSvg}
          </div>
          <p className="text-darkBlueM font-bold text-[13px] ">{text}</p>
        </div>
        <div className="w-[100px] h-[200px] bg-ashM absolute top-[50px] -z-10"></div>
      </div>
    );
  };
  
  export default SingleSkill;