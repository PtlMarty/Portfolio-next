import { Button } from "./ui/button";

interface ResumeButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const ResumeButton = ({ onClick, children }: ResumeButtonProps) => (
  <Button
    onClick={onClick}
    className="mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/70 transition duration-200"
  >
    {children}
  </Button>
);
