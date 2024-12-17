import ContactInfos from "./ContactInfos";
import { Button } from "./ui/button";

const About = () => {
  return (
    <div className="flex justify-center flex-col items-center h-full z-10">
      <div className="flex flex-col text-center items-center w-full max-w-2xl">
        <h2 className="text-4xl font-bold mb-4">About me</h2>
        <p className="text-sm md:text-md leading-relaxed font-semibold">
          Hi, I’m Portal Martin — Web Developer & Problem Solver
          <br /> I specialize in building user-friendly web applications and
          e-commerce platforms with a focus on functionality, performance, and
          clean code. With a solid foundation in HTML, CSS, JavaScript, React,
          and Ruby on Rails, I transform ideas into interactive, impactful
          digital solutions.
          <br /> I’m also expanding my skills with Golang while creating my own
          projects and helping businesses enhance their online presence as a
          freelancer. My experience in the hospitality industry has strengthened
          my communication, adaptability, and problem-solving skills, which I
          bring to every project. Let’s collaborate to turn your vision into
          reality!
        </p>
        <p className="text-sm md:text-md leading-relaxed font-semibold mt-4">
          こんにちは、ポータル・マーティンです — ウェブ開発者 & 課題解決者
          機能性、パフォーマンス、そしてクリーンなコードに重点を置き、使いやすいウェブアプリケーションやECプラットフォームを構築しています。HTML、CSS、JavaScript、React、Ruby
          on Rails
          の確かなスキルを活かし、アイデアをインタラクティブで効果的なデジタルソリューションへと変えます。
          現在は Golang
          も学びながら、自身のプロジェクトに取り組むとともに、フリーランスとして企業のオンラインプレゼンス向上をサポートしています。ホスピタリティ業界での経験を通じて培ったコミュニケーション力、適応力、問題解決能力をすべてのプロジェクトに活かしています。
          あなたのビジョンを現実に変えるお手伝いをさせてください！
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
          <div className="flex gap-5">
            <Button
              onClick={() =>
                window.open("/Resume20241208 PORTAL MARTIN.pdf", "_blank")
              }
              className="mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/70 transition duration-200"
            >
              My Resume
            </Button>
            <Button
              onClick={() => window.open("/履歴書PORTAL MARTIN.pdf", "_blank")}
              className="mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/70 transition duration-200"
            >
              履歴書
            </Button>
            <Button
              onClick={() =>
                window.open("/職務経歴書PORTAL MARTIN.pdf", "_blank")
              }
              className="mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/70 transition duration-200"
            >
              職務経歴書
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
