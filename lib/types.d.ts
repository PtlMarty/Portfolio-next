export interface CardProps {
  cardTitle?: string;
  cardContent?: React.ReactNode | string;
  classname?: string | undefined;
  cardDescription?: string;
  cardFooter?: string | React.ReactNode;
}

export interface SkillTypes {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}
