interface MenuListProps {
  onSectionChange: (
    section: "about" | "skillsSection" | "projectSection"
  ) => void;
}

const MenuList = ({ onSectionChange }: MenuListProps) => {
  return (
    <nav
      className="flex md:flex-col items-center md:my-3 gap-2"
      aria-label="Main navigation"
    >
      {[
        { id: "about", label: "About" },
        { id: "skillsSection", label: "Skills" },
        { id: "projectSection", label: "Projects" },
      ].map((item, index) => (
        <div key={item.id} className="flex items-center">
          <button
            onClick={() =>
              onSectionChange(
                item.id as "about" | "skillsSection" | "projectSection"
              )
            }
            className="font-bold text-xl hover:text-[#3ac58f] focus:text-[#3ac58f] transition-colors duration-200"
            aria-label={`View ${item.label} section`}
          >
            {item.label}
          </button>
          {index < 2 && (
            <div
              className="h-full w-[2px] bg-gray-800 mx-2"
              aria-hidden="true"
            />
          )}
        </div>
      ))}
    </nav>
  );
};

export default MenuList;
