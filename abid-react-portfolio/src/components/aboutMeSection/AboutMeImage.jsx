const AboutMeImage = () => {
    return (
      <div className="h-[500px] w-[300px] relative">
        <div className="h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden">
          <img
            src="https://res.cloudinary.com/dlqldp4wi/image/upload/v1741534356/aboutMe_zjxaqq.jpg"
            alt="About Me Image"
            className="h-full w-auto object-cover"
          />
        </div>
        <div className="h-[500px] w-[250px] ml-3 bg-lightBlueM absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
      </div>
    );
  };
  
  export default AboutMeImage;