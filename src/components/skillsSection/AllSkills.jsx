import SingleSkill from "./SingleSkill";
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
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto ">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;