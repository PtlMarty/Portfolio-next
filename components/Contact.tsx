import { Github, Linkedin, LucideMail } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  // TODO: Ajouter des animations lorsque le curseur passe sur les icônes de contact
  // TODO: Couleur?

  return (
    <div className="flex mt-3 gap-4">
      <Link href="">
        <Github className="hover:scale-110 hover:text-[#3ac58f] transition-transform transition-colors duration-300" />
      </Link>
      <Link href="">
        <Linkedin className="hover:scale-110 hover:text-[#3ac58f] transition-transform transition-colors duration-300" />
      </Link>
      <Link href="">
        <LucideMail className="hover:scale-110 hover:text-[#3ac58f] transition-transform transition-colors duration-300" />
      </Link>
    </div>
  );
};

export default Contact;
