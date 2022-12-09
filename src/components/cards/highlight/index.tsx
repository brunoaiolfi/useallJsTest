import { Text, View } from "react-native";
import {
  Amount,
  CardContainer,
  Header,
  LastActivy,
  Type,
  TypeIcon,
} from "./styles";

export interface CardProps {
  type: "Entrada" | "Saída" | "Total";
  amount: number;
  icon: "arrow-up-circle" | "arrow-down-circle" | "dollar-sign";
  data: string;
}

export function CardsHighLight({ amount, data, icon, type }: CardProps) {
  return (
    <CardContainer type={type}>
      <Header>
        <Type type={type}>{type}</Type>
        <TypeIcon name={icon} size={32} type={type}></TypeIcon>
      </Header>

      <View>
        <Amount type={type}>
          {
            amount.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })
          }
        </Amount>
        <LastActivy type={type}>Última atividade {data}.</LastActivy>
      </View>
    </CardContainer>
  );
}
