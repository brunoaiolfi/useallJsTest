import { Text, TouchableOpacity } from "react-native";
import { Button, Icon, Title } from "./styles";

interface ButtonProps {
  onPress: () => void;
  title: string;
}

export function ButtonComponent({ onPress, title }: ButtonProps) {
  return (
    <Button onPress={onPress} >
      <Title>{title}</Title>
    </Button>
  );
}
