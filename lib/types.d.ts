interface CardProps {
  cardClass?: string;
  cardTitle?: string;
  titleClass?: string;
  cardContent?: React.ReactNode | string;
  contentClass?: string;
  cardDescription?: string;
  descriptionClass?: string;
  cardFooter?: string | React.ReactNode;
  footerClass?: string;
  cardImage?: string; // Add cardImage prop
}

export interface SkillTypes {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}
