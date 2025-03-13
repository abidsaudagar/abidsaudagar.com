import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className=" h-full flex items-center justify-center "
    >
      <img
        src="https://res.cloudinary.com/dlqldp4wi/image/upload/v1741534283/abidImg_xlybki.png"
        alt="Abid saudagar"
        className="max-h-[350px] w-auto"
      />

      <div className=" absolute -z-10 flex justify-center items-center animate-pulse ">
      </div>
    </motion.div>
  );
};

export default HeroPic;