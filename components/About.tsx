import ContactInfos from "./ContactInfos";
import { Button } from "./ui/button";

const About = () => {
  return (
    <div className="flex justify-center flex-col items-center h-full z-10">
      <div className="flex flex-col text-center items-center w-full max-w-2xl">
        <h2 className="text-4xl font-bold mb-4">About me</h2>
        <p className="text-sm md:text-md leading-relaxed font-semibold">
          With a background in hospitality and a recent transition into frontend
          development, I’m a customer-focused developer dedicated to crafting
          digital experiences that feel personal and intuitive. Years of working
          directly with people have given me a keen understanding of what users
          value most: ease, connection, and satisfaction.
        </p>
        <p className="text-sm md:text-md leading-relaxed font-semibold mt-3">
          Drawing from my experience in fostering meaningful relationships, I’m
          eager to bring this relational mindset into tech. My goal is to
          develop user-friendly, accessible digital solutions that prioritize
          both form and function, delivering a seamless experience that users
          truly enjoy.
        </p>
      </div>
      <div className="hidden md:block w-[500px] h-[2px] bg-gray-300 mt-16"></div>

      <div>
        {/* // TODO add contact information section like phone number, email, and address
          Name: PORTAL MARTIN
          Age: 35
          City: Tokyo, Japan
          Job: Fullstack Web Developer
          Phone: 080-5188-1989
          Email: ptl_martin@yahoo.co.jp
          Freelance: Available */}

        <div className="flex flex-col items-center mt-8">
          <h3 className="text-2xl font-bold mb-6">Contact</h3>
          <div className="flex flex-col md:flex-row md:space-x-8 gap-3">
            {/* Left Column */}
            <div className="flex md:flex-col gap-4 mb-6 md:mb-0">
              <ContactInfos label="Name:" value="PORTAL MARTIN" />
              <ContactInfos label="Location:" value="Tokyo, Japon" />
            </div>

            {/* Right Column */}
            <div className="flex md:flex-col gap-4">
              <ContactInfos label="Phone:" value="080-5188-1989" />
              <ContactInfos label="Email:" value="ptl_martin@yahoo.co.jp" />
            </div>
          </div>
          <Button
            onClick={() => window.open("/Portal_Martin.pdf", "_blank")}
            className="mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/70 transition duration-200"
          >
            My Resume
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
