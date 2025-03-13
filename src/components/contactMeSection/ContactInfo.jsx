import { HiOutlineMail } from "react-icons/hi";
import { SiCalendly } from "react-icons/si";
import { IoLocationOutline } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";



import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 sm:mt-0  sm:mb-5 sm:ml-6 sm:pb-3 text-black font-body">
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sendmailtoAbid@gmail.com" target="_blank" rel="noopener norefferer"><SingleInfo text="sendmailtoAbid@gmail.com" Image={HiOutlineMail} /></a>
      <a href="https://calendly.com/abidsaudagar/free-15-minute-ai-search-consulting"><SingleInfo text="Abid Saudagar" Image={SiCalendly} /></a>
      <a href="https://www.linkedin.com/in/abidsaudagar/"><SingleInfo text="Abid Saudagar" Image={FaLinkedinIn}/></a>
      <a href="https://medium.com/@abidsaudagar"><SingleInfo text="Abid Saudagar" Image={FaMedium}/></a>
      <SingleInfo text="Aurangabad, India" Image={IoLocationOutline} />
     
      
    </div>
  );
};

export default ContactInfo;