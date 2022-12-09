import styled from "styled-components/native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

interface Color {
  color: string;
}
export const RegisterContainer = styled.View`
  width: 100%;
  height: 100%;
`;

export const Header = styled.View`
  background: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 132px;

  justify-content: flex-end;
  align-items: center;

  padding: 24px;
`;

export const TitlePage = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: 18px;
`;

export const Form = styled.View`
  height: 100%;

  padding: 16px;
  justify-content: space-between;
`;

export const ButtonGroup = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.View`
  width: 45%;
`;

export const ButtonSubmit = styled.TouchableOpacity`
  padding: 18px;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const SubmitText = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: 16px;
  font-weight: bold;
`;

export const CategorySelectButton = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 8px;

  background: ${({ theme }) => theme.colors.shape};

  font-size: 16px;
  color: ${({ theme }) => theme.colors.title};
  padding: 18px;

  margin-bottom: 16px;
`;

export const CategorySelectText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.title};
`;

export const CategorySelectIcon = styled(AntDesign)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.title};
`;

export const ModalBackground = styled.View`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.25);

  padding: 24px;
`;

export const ModalContainer = styled.View`
  min-height: 40%;
  width: 100%;

  background: ${({ theme }) => theme.colors.shape};
  border-radius: 8px;
`;

export const ModalHeader = styled.View`
  width: 100%;
  padding: 8px;

  background: ${({ theme }) => theme.colors.shape};

  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 8px;
`;

export const ModalHeaderTitle = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.title};
`;

export const ModalHeaderCloseButton = styled(EvilIcons)`
  color: ${({ theme }) => theme.colors.attention};
`;

export const OptionContainer = styled.TouchableOpacity<Color>`
  padding: 12px;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-right-width: 0px;
  border-left-width: 8px;
  border-bottom-width: 0px;

  border-color: ${({ color }) => color};
`;

export const ErrorsMessage = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.attention};
  margin: 4px;
`;
