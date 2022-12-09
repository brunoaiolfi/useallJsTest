import { Text, View } from "react-native";
import { Category } from "../../../types/interfaces/categories";
import { Movimentation } from "../../../types/interfaces/movimentation";
import { categories } from "../../../utils/categories";
import {
  CardContainer,
  Footer,
  FooterText,
  FooterTextContainer,
  Header,
  IconCategory,
  Price,
  Title,
} from "./styles";

export function CardActivie({
  date,
  categoryKey,
  value,
  name,
  activity,
}: Movimentation) {

  const category: Category | undefined = categories.find(category => category.key === categoryKey);

  return (
    <CardContainer>
      <Header>
        <Title>{name}</Title>
        <Price type={activity}>{activity === 'out' && '- '} {Number(value).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })}</Price>
      </Header>

      <Footer>
        <FooterTextContainer>
          <IconCategory name={category?.icon} size={18} />
          <FooterText>{category?.name}</FooterText>
        </FooterTextContainer>
        <FooterText>
          {new Date(date).getDate()}
          /
          {new Date(date).getMonth()}
          /
          {new Date(date).getFullYear()}
        </FooterText>
      </Footer>
    </CardContainer>
  );
}
