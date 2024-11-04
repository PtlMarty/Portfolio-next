import { Github, Linkedin, LucideMail } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  // TODO: Ajouter des animations lorsque le curseur passe sur les icônes de contact
  // TODO: Couleur?

  return (
    <div className="flex mt-3 gap-4">
      <Link href="https://github.com/PtlMarty" target="_blank">
        <Github className="hover:scale-110 transition-transform transition-colors duration-300 hover:text-[#3ac58f] " />
      </Link>
      <Link
        href="https://www.linkedin.com/in/martin-portal-292b12289/"
        target="_blank"
      >
        <Linkedin className="hover:scale-110 transition-transform transition-colors duration-300 hover:text-[#3ac58f] " />
      </Link>
      <Link href="mailto:ptl_martin@yahoo.co.jp">
        <LucideMail className="hover:scale-110 transition-transform transition-colors duration-300 hover:text-[#3ac58f] " />
      </Link>
    </div>
  );
};

export default Contact;
