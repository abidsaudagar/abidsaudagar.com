import { MdOutlineAnalytics } from "react-icons/md";
import { SiFastapi } from "react-icons/si";
import { SiLangchain } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiHuggingface } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { SiElasticsearch } from "react-icons/si";
import { FaRobot } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  {
    skill: "ML",
    icon: MdOutlineAnalytics,
  },
  {
    skill: "Fast API",
    icon: SiFastapi,
  },
  {
    skill: "Langchain",
    icon: SiLangchain,
  },
  {
    skill: "MySQL",
    icon: SiMysql,
  },
  {
    skill: "Huggingface",
    icon: SiHuggingface,
  },
  {
    skill: "AI",
    icon: GiArtificialIntelligence,
  },
  {
    skill: "ElasticSearch",
    icon: SiElasticsearch,
  },
  {
    skill: "Chatbot",
    icon: FaRobot,
  },
]

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl text-darkBlueM" />
            <p className="text-center mt-4 text-darkBlueM">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;