import { FC } from "react";

interface HeaderProps {
  onSectionChange: (section: string) => void;
}

const Header: FC<HeaderProps> = ({ onSectionChange }) => {
  return (
    <div className="flex flex-col items-center my-3">
      <button
        onClick={() => onSectionChange("about")}
        className="hover:semibold"
      >
        À propos
      </button>
      <button
        onClick={() => onSectionChange("skillsSection")}
        className="hover:semibold"
      >
        Skills
      </button>
      <button
        onClick={() => onSectionChange("projectSection")}
        className="hover:semibold"
      >
        Projets
      </button>
    </div>
  );
};

export default Header;
