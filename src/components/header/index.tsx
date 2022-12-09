import React from "react";
import { Image, Text, View } from "react-native";

import {
  HeaderContainer,
  LogoutIcon,
  UserContainer,
  UserHello,
  UserHelloContainer,
  UserImage,
  UserName,
} from "./styles";

export function Header() {
  const headerProps = {
    name: "Bruno S.",
    image: "https://avatars.githubusercontent.com/u/64096262?v=4",
  };

  return (
    <HeaderContainer>
      <UserContainer>
        <UserImage source={{ uri: headerProps.image }} />
        <UserHelloContainer>
          <UserHello>Ola</UserHello>
          <UserName>{headerProps.name}</UserName>
        </UserHelloContainer>
      </UserContainer>

      <LogoutIcon name="power" size={24}></LogoutIcon>
    </HeaderContainer>
  );
}
