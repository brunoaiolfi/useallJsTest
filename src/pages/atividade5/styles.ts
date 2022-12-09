import styled from "styled-components/native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  width: 100%;
  height: 100%;
`;

export const Header = styled.View`
  background: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 135px;

  justify-content: flex-end;
  align-items: center;

  padding: 24px;
`;

export const TitlePage = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: 18px;
`;

export const Content = styled.View`
  width: 100%;
  height: 100%;
  padding: 20px;
`;

export const ChartContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: 50%;
`;
export const MonthSelect = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;

  justify-content: space-between;
`;

export const MonthSelectButton = styled.TouchableOpacity`
  width: 32px;
  height: 24px;
`;
export const SelectIcon = styled(Feather)`
  font-size: 24px;
`;

export const Month = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: 18px;
  font-weight: bold;
`;
