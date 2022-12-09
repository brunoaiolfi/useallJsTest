import styled from "styled-components/native";
import { Entypo } from "@expo/vector-icons";
interface ButtonProps {
  type: "in" | "out";
  isPressed: boolean;
}

interface TitleProps {
  type: "in" | "out";
}

export const Button = styled.TouchableOpacity`
  padding: 16px;
  width: 100%;

  border: 1px solid ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  border-radius: 8px;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #ffff;
`;

export const Icon = styled(Entypo)<TitleProps>`
  color: ${({ theme, type }) =>
    type === "in" ? theme.colors.success : theme.colors.attention};
`;
