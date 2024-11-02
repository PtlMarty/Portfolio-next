import { Card, CardContent, CardTitle } from "./ui/card";

interface CardProps {
  cardTitle?: string;
  cardContent?: React.ReactNode | string;
  classname?: string | undefined;
  logoScr?: string;
}

const CardItems = ({ cardTitle, cardContent, classname }: CardProps) => {
  return (
    <div>
      <Card className={`${classname} bg-transparent`}>
        {cardTitle && <CardTitle>{cardTitle}</CardTitle>}
        <CardContent>{cardContent}</CardContent>
      </Card>
    </div>
  );
};

export default CardItems;
