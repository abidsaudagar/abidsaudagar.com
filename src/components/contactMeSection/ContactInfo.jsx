import { HiOutlineMail } from "react-icons/hi";
import { SiCalendly } from "react-icons/si";
import { IoLocationOutline } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";



import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-2 lg:w-[105%] sm:w-[100%] sm:mb-8 sm:ml-10 text-black font-body">
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sendmailtoAbid@gmail.com" target="_blank" rel="noopener norefferer"><SingleInfo text="sendmailtoAbid@gmail.com" Image={HiOutlineMail} /></a>
      <a href="https://calendly.com/abidsaudagar/free-15-minute-ai-search-consulting" target="_blank" rel="noopener norefferer"><SingleInfo text="Abid Saudagar" Image={SiCalendly} /></a>
      <a href="https://www.linkedin.com/in/abidsaudagar/" target="_blank" rel="noopener norefferer"><SingleInfo text="Abid Saudagar" Image={FaLinkedinIn}/></a>
      <a href="https://medium.com/@abidsaudagar" target="_blank" rel="noopener norefferer"><SingleInfo text="Abid Saudagar" Image={FaMedium}/></a>
      <a href="https://www.google.com/maps/place/Aurangabad/@19.901054,75.352478,15" target="_blank" rel="noopener norefferer" ><SingleInfo text="Aurangabad, India" Image={IoLocationOutline} /> </a>
     
      
    </div>
  );
};

export default ContactInfo;