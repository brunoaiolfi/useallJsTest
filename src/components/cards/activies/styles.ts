import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

interface CardPropType {
  type: "in" | "out";
}

export const CardContainer = styled.View`
  width: 100%;
  height: 128px;

  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors.shape};

  padding: 15px;

  display: flex;
  justify-content: space-between;

  margin-right: 16px;

  margin-bottom: 16px;
`;

export const Header = styled.View`
  display: flex;
`;

export const Title = styled.Text`
  font-size: 18px;
`;

export const Price = styled.Text<CardPropType>`
  font-size: 16px;
  color: ${({ theme, type }) =>
    type === "in" ? theme.colors.success : theme.colors.attention};
`;

export const Footer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FooterTextContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const IconCategory = styled(Feather)`
  color: ${({ theme }) => theme.colors.text};
  margin-right: 8px;
`;

export const FooterText = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
`;
