import styled from "styled-components/native";
import { TextInput } from "react-native";

export const Container = styled(TextInput)`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 8px;

  background: ${({ theme }) => theme.colors.shape};

  font-size: 16px;
  color: ${({ theme }) => theme.colors.title};
  padding: 18px;

  margin-bottom: 16px;
`;
