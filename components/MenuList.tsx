interface MenuListProps {
  onSectionChange: (section: string) => void;
}

const MenuList = ({ onSectionChange }: MenuListProps) => {
  return (
    <div className="flex md:flex-col items-center md:my-3 gap-2">
      <button
        onClick={() => onSectionChange("about")}
        className="font-bold hover:text-[#3ac58f] focus:text-[#3ac58f]"
      >
        À propos
      </button>
      <button
        onClick={() => onSectionChange("skillsSection")}
        className="font-bold hover:text-[#3ac58f] focus:text-[#3ac58f]"
      >
        Skills
      </button>
      <button
        onClick={() => onSectionChange("projectSection")}
        className="font-bold hover:text-[#3ac58f] focus:text-[#3ac58f]"
      >
        Projets
      </button>
    </div>
  );
};

export default MenuList;
