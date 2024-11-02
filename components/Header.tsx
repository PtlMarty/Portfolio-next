interface HeaderProps {
  onSectionChange: (section: string) => void;
}

const Header = ({ onSectionChange }: HeaderProps) => {
  //TODO Ajouter une animation lorsque le curseur passe sur un bouton?

  return (
    <div className="flex flex-col items-center my-3 gap-2">
      <button
        onClick={() => onSectionChange("about")}
        className="font-semibold hover:text-[#3ac58f] focus:text-[#3ac58f]"
      >
        À propos
      </button>
      <button
        onClick={() => onSectionChange("skillsSection")}
        className="font-semibold hover:text-[#3ac58f] focus:text-[#3ac58f]"
      >
        Skills
      </button>
      <button
        onClick={() => onSectionChange("projectSection")}
        className="font-semibold hover:text-[#3ac58f] focus:text-[#3ac58f]"
      >
        Projets
      </button>
    </div>
  );
};

export default Header;
