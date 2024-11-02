import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface CardProps {
  cardTitle: string;
  cardContent?: React.ReactNode | string;
  classname?: string | undefined;
  logoScr?: string;
  logoWidth?: number;
  logoHeight?: number;
}

const CardItems = ({ cardTitle, cardContent, classname }: CardProps) => {
  // Add additional styles or logic as needed
  return (
    <div>
      <Card className={classname}>
        <CardHeader>
          <CardTitle>{cardTitle}</CardTitle>
        </CardHeader>
        <CardContent>{cardContent}</CardContent>
      </Card>
    </div>
  );
};

export default CardItems;
