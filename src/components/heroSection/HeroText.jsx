import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:mb-6 sm:text-center">
     
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-7xl sm:text-4xl text-lightBlueM font-bold font-body uppercase"
      >
        Abid <br className="sm:hidden md:block" />
        Saudagar
      </motion.h1>
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-3xl sm:text-xl  uppercase text-lightGrey font-body"
      >
        Senior Machine Learning Engineer
      </motion.h2>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-xl mt-4 text-darkGrey font-body"
      >
         A Senior Machine Learning Engineer <br /> Helping Businesses develop semantic search, RAG chatbot 
        & LLM based Solutions!
      </motion.p>

     
    </div>
  );
};

export default HeroText;