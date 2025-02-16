import ContactInfos from "./ContactInfos";
import { ResumeButton } from "./ResumeButton";

const ContactSection = () => {
  const openPdf = (path: string) => window.open(path, "_blank");

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
      <div className="flex gap-5">
        <ResumeButton
          onClick={() => openPdf("/Resume20241208 PORTAL MARTIN.pdf")}
        >
          My Resume
        </ResumeButton>
        <ResumeButton onClick={() => openPdf("/履歴書PORTAL MARTIN.pdf")}>
          履歴書
        </ResumeButton>
        <ResumeButton onClick={() => openPdf("/職務経歴書 PORTAL MARTIN.pdf")}>
          職務経歴書
        </ResumeButton>
      </div>
    </div>
  );
};

export default ContactSection;
