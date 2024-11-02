import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "./ui/card";

interface CardProps {
  cardTitle?: string;
  cardContent?: React.ReactNode | string;
  classname?: string | undefined;
  cardDescription?: string;
  cardFooter?: string | React.ReactNode;
}

const CardItems = ({
  cardTitle,
  cardContent,
  cardDescription,
  cardFooter,
  classname,
}: CardProps) => {
  return (
    <div>
      <Card className={`${classname} `}>
        {cardTitle && <CardTitle>{cardTitle}</CardTitle>}
        <CardContent>{cardContent}</CardContent>
        <CardDescription>{cardDescription}</CardDescription>
        <CardFooter>{cardFooter}</CardFooter>
      </Card>
    </div>
  );
};

export default CardItems;
