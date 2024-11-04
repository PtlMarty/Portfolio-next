import { CardProps } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "./ui/card";

const CardItems = ({
  cardClass,
  cardTitle,
  titleClass,
  cardContent,
  contentClass,
  cardDescription,
  descriptionClass,
  cardFooter,
  footerClass,
  cardImage, // Destructure cardImage
}: CardProps) => {
  return (
    <Card
      className={`${cardClass} ${cardImage ? "bg-cover bg-center" : ""}`}
      style={cardImage ? { backgroundImage: `url(${cardImage})` } : undefined}
    >
      {cardTitle && <CardTitle className={titleClass}>{cardTitle}</CardTitle>}
      <CardContent className={contentClass}>{cardContent}</CardContent>
      {cardDescription && (
        <CardDescription className={descriptionClass}>
          {cardDescription}
        </CardDescription>
      )}
      <CardFooter className={footerClass}>{cardFooter}</CardFooter>
    </Card>
  );
};

export default CardItems;
