import { Link } from "react-scroll";
import YoutubeVideos from "./YoutubeVideos"
const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-center sm:items-center md:text-center sm:text-center mr-4">
      <h2 className="text-6xl text-darkBlueM text-bold mb-10 font-body">About</h2>
      <p className="text-darkGrey font-body">
        I’m a Senior Machine Learning Engineer. I make videos about Machine Learning, NLP, LLMs, Langchain,
        HuggingFace Models, BERT, Semantic Search, Elastic Search and Deep Learning.I have strong analytical 
        ability to solve real world problems, a tech enthusiast and optimistic.
      </p>
      <YoutubeVideos/>
      <a href="https://www.youtube.com/@AbidSaudagar">
      <button className="px-4 py-2 mr-3 rounded-full text-xl font-body text-white  border flex items-center gap-1  bg-darkBlueM transition-all duration-500 hover:scale-110 hover:border-lightCream cursor-pointer hover:shadow-cyanShadow">
       View More
      </button>
      </a>
    </div>
  );
};

export default AboutMeText;