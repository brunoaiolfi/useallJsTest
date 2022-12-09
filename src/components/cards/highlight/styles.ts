import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

interface CardPropType {
  type: "Entrada" | "Saída" | "Total";
}

export const CardContainer = styled.View<CardPropType>`
  width: 300px;
  height: 175px;

  border-radius: 10px;

  background-color: ${({ theme, type }) =>
    type === "Total" ? theme.colors.secondary : theme.colors.shape};

  padding: 15px;

  display: flex;
  justify-content: space-between;

  margin-right: 8px;
  margin-left: 16px;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TypeIcon = styled(Feather)<CardPropType>`
  color: ${({ theme, type }) =>
    type === "Total"
      ? theme.colors.shape
      : type === "Entrada"
      ? theme.colors.success
      : theme.colors.attention};
`;

export const Type = styled.Text<CardPropType>`
  font-size: 14px;
  color: ${({ theme, type }) =>
    type === "Total" ? theme.colors.shape : theme.colors.title};
`;

export const Amount = styled.Text<CardPropType>`
  font-size: 32px;
  color: ${({ theme, type }) =>
    type === "Total" ? theme.colors.shape : theme.colors.title};
`;

export const LastActivy = styled.Text<CardPropType>`
  font-size: 12px;
  color: ${({ theme, type }) =>
    type === "Total" ? theme.colors.shape : theme.colors.text};
`;
