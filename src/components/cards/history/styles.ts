import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

interface ContainerProps {
  color: string;
}
export const Container = styled.View<ContainerProps>`
  width: 100%;
  background: ${({ theme }) => theme.colors.shape};

  padding: 13px 24px;

  border-radius: 5px;
  border-left-width: 5px;
  border-left-color: ${({ color }) => color};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.title};
`;
export const Amount = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.title};

  font-weight: bold;
`;
