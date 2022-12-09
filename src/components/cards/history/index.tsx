import { Text, View } from "react-native";
import { Category } from "../../../types/interfaces/categories";
import { Movimentation } from "../../../types/interfaces/movimentation";
import { categories } from "../../../utils/categories";
import { Amount, Container, Title } from "./styles";

interface HistoryProps {
  color: string;
  title: string;
  amount: string;
}
export function CardHistory({ amount, color, title }: HistoryProps) {
  return (
    <Container color={color}>
      <Title>{title}</Title>
      <Amount>{amount}</Amount>
    </Container>
  );
}
