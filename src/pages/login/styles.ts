import { FlatList } from "react-native";
import styled from "styled-components/native";
import { CardProps } from "../../components/cards/highlight";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 70%;

  background-color: ${({ theme }) => theme.colors.primary};

  justify-content: flex-end;

  padding: 56px 0px;
`;
export const TitleWrapper = styled.View`
  width: 100%;
  height: 80%;

  display: flex;

  justify-content: space-around;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: 30px;
  font-weight: 600;
  text-align: center;
`;

export const SignInTitle = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: 16px;
  font-weight: 400;

  text-align: center;

  margin-top: 16px;
`;

export const Footer = styled.View`
  width: 100%;
  height: 30%;

  background-color: ${({ theme }) => theme.colors.secondary};

`;
export const FooterWrapper = styled.View`
  margin-top: -29px;

  padding: 0px 32px;

  display: flex;
  
`;
