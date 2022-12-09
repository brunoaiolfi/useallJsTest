import { FlatList } from "react-native";
import styled from "styled-components/native";
import { CardProps } from "../../components/cards/highlight";

export const DashboardContainer = styled.View`
  background-color: ${(props) => props.theme.colors.background};
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
`;

export const InputContainer = styled.View`
  display: flex;
  padding: 20px;
`;
export const InputWrapper = styled.View`
  display: flex;
  width: 100%;
  margin-top: 18px;
`;

export const ResultWrapper = styled.View`
  display: flex;
  flex-direction: row;
`;

export const ResultsContainer= styled.View`
  display: flex;
  padding: 90px;
`;

export const Result = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;