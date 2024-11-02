import { Github, Linkedin, LucideMail } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  // TODO: Ajouter des animations lorsque le curseur passe sur les icônes de contact
  // TODO: Couleur?

  return (
    <div className="flex mt-3 gap-4">
      <Link href="">
        <Github color="black" />
      </Link>
      <Link href="">
        <Linkedin color="black" />
      </Link>
      <Link href="">
        <LucideMail color="black" />
      </Link>
    </div>
  );
};

export default Contact;
