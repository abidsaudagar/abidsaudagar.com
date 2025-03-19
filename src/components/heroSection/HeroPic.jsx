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
        src="https://res.cloudinary.com/dlqldp4wi/image/upload/v1742194171/image_1_dc409n.png"
        alt="Abid saudagar"
        className=" mix-blend-multiply lg:w-[360px] sm:w-[280px] h-auto shadow-cyanShadow rounded-full"
      />

      <div className=" absolute -z-10 flex justify-center items-center animate-pulse ">
      </div>
    </motion.div>
  );
};

export default HeroPic;