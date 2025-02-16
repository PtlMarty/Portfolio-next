import ContactInfos from "./ContactInfos";
import { Button } from "./ui/button";
import ContactSection from "./ContactSection";

const ResumeButton = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <Button
    onClick={onClick}
    className="mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/70 transition duration-200"
  >
    {children}
  </Button>
);

const About = () => {
  const openPdf = (path: string) => window.open(path, "_blank");

  return (
    <div className="flex　items-center h-full w-full z-10">
      <div className="flex text-center justify-evenly w-full gap-16 p-8">
        <div className="flex flex-col text-center items-center w-full mt-4">
          <h3 className="text-xl font-bold text-gray-900">
            &quot;Mix Between Hospitality and Technology&quot;
          </h3>
          <div className="w-full mx-12 h-[1px] bg-gray-500 my-5"></div>

          <p className="text-sm leading-relaxed font-medium">
            I specialize in building user-friendly web applications and
            e-commerce platforms with a focus on functionality, performance, and
            clean code.
            <br />
            <br />
            With a solid foundation in HTML, CSS, JavaScript, React, and Ruby on
            Rails,
            <br />
            I transform ideas into interactive, impactful digital solutions.
            <br />
            <br />
            I&apos;m also expanding my skills with Golang while creating my own
            projects and helping businesses enhance their online presence as a
            freelancer.
            <br />
            <br />
            My experience in the hospitality industry has strengthened my
            communication, adaptability, and problem-solving skills, which I
            bring to every project.
            <br />
            <br />
            Let&apos;s collaborate to turn your vision into reality!
          </p>
        </div>
        <div className="flex flex-col text-center items-center w-full  mt-4">
          <h3 className="text-xl font-extrabold text-gray-900">
            「アイディアをカタチにすることに情熱を持っています」
          </h3>
          <div className="w-full mx-12 h-[1px] bg-gray-500 my-5"></div>
          <p className="text-sm leading-relaxed ">
            6年前に日本に移住し、現在まで飲食業界、
            食品関係の日本企業で働いてきました
            <br />
            フランス語、英語、日本語を話します
            <br />
            <br />
            ついに長年の夢であったウェブデベロッパーとしてのキャリアのスタートさせ
            <br />
            半年で習得したHTML、CSS、JavaScript、React、Ruby on Railsを使って
            <br />
            ウェブアプリケーションやECサイトを開発しています
            <br />
            幅広いアイディアに対応するため日々新しい開発言語も学び続けています
            <br />
            <br />
            ヨーロッパの国々や日本企業での経験から
            <br />
            「どんな環境にも適応できる忍耐力」「多様な顧客ニーズへの対応力」に自信があります！
            <br />
            今後よりプロフェッショナルな道で
            <br />
            より顧客満足度の高いデジタルソリューションを提供したいと考えています
            <br />
            <br />
            please don&apos;t hesitate to contact me!!! <br />
            ご連絡をお待ちしております
          </p>
        </div>
      </div>
      <ContactSection />
    </div>
  );
};

export default About;
