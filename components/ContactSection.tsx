import ContactInfos from "./ContactInfos";

const ContactSection = () => {
  return (
    <div className="flex flex-col items-center mt-4">
      <h3 className="text-2xl font-bold mb-6">Contact</h3>
      <div className="flex flex-col md:flex-row md:space-x-8 gap-3">
        {/* Left Column */}
        <div className="flex md:flex-col gap-4 mb-6 md:mb-0">
          <ContactInfos label="Name:" value="PORTAL MARTIN" />
          <ContactInfos label="Location:" value="Tokyo, Japan" />
        </div>

        {/* Right Column */}
        <div className="flex md:flex-col gap-4">
          <ContactInfos label="Phone:" value="080-5188-1989" />
          <ContactInfos label="Email:" value="ptl_martin@yahoo.co.jp" />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
