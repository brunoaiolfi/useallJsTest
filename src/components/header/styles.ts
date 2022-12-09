import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const HeaderContainer = styled.View`
  width: 100%;
  height: 200px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  background: ${({ theme }) => theme.colors.primary};
`;

export const UserContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UserImage = styled.Image`
  width: 48px;
  height: 48px;

  border-radius: 8px;
`;

export const UserHelloContainer = styled.View`
  margin-left: 15px;
`;

export const UserHello = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const UserName = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.shape};
  font-weight: bold;
`;

export const LogoutIcon = styled(Feather)`
  color: ${({ theme }) => theme.colors.secondary};
`;
