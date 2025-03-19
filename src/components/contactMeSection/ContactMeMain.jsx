import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";

const ContactMeMain = () => {
  return (
    <div
      id="contact"
      className="max-w-[1000px] mx-auto items-center justify-center mt-[100px] px-4 "
    >
      <h2 className="text-6xl text-darkBlueM mb-10 text-center font-body">Contact</h2>
      <div className="flex justify-between gap-10 bg-ashM p-6 rounded-2xl lg:flex-row sm:flex-col">
        <ContactMeLeft />
        <ContactMeRight />
      </div>
    </div>
  );
};

export default ContactMeMain;