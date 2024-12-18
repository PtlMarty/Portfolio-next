interface MenuListProps {
  onSectionChange: (section: string) => void;
}

const MenuList = ({ onSectionChange }: MenuListProps) => {
  return (
    <div className="flex md:flex-col items-center md:my-3 gap-2">
      <button
        onClick={() => onSectionChange("about")}
        className="font-bold text-xl hover:text-[#3ac58f] focus:text-[#3ac58f]"
      >
        About
      </button>
      <div className="h-full w-[2px] bg-gray-800"></div>
      <button
        onClick={() => onSectionChange("skillsSection")}
        className="font-bold text-xl hover:text-[#3ac58f] focus:text-[#3ac58f]"
      >
        Skills
      </button>
      <div className="h-full w-[2px] bg-gray-800"></div>

      <button
        onClick={() => onSectionChange("projectSection")}
        className="font-bold text-xl hover:text-[#3ac58f] focus:text-[#3ac58f]"
      >
        Projects
      </button>
    </div>
  );
};

export default MenuList;
