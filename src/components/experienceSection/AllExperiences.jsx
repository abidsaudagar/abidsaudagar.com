
import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Founding ML Engineer",
    company: "Hello I",
    date: "2022 - Present",
    responsibilities: [
      "Building a resume eneration platform using LLMs and advanced RAG methods.",
      "utilsing Langchain, FastAPI Qdrant, Google Cloud Platforms .",
    ],
  },
  {
    job: "ML Engineer",
    company: "17LIVE Inc.",
    date: "2021 - 2024",
    responsibilities: [
      "Hands-on experience in deploying and maintaining large scae Elasticsearch clusters.",
      "Elasticsearch expert with proficient in writing complex elasticsearch queries, building custom analyzer, vectorsearch etc.",
    ],
  },
  {
    job: "Business Operation Specialist",
    company: "Amazon",
    date: "2020 - 2021",
    responsibilities: [
      "Hands on experience with AWS services like AWS Lambda, Athena, S3 Brackets, Redshift etc.",
      "Generated business insights by performing deep dive analysis.",
      "Planned and forcasted the resources."
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-darkBlueM lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
