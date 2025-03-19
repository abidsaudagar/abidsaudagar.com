import ContactInfo from "./ContactInfo";
const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8  sm:mr-2 lg:mr-8 lg:ml-6">
      <img
        src="../../public/images/abidLogo.jpg"
        alt="email image"
        className="max-w-[250px] rounded-full mr-8 lg:block sm:hidden shadow-cyanShadow"
      />
      <ContactInfo />
    </div>
  );
};

export default ContactMeRight;