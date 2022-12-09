import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "./src/global/styles/theme";
import { Atividade2 } from "./src/pages/atividade2";
import AppRoutes from "./src/routes/app.routes";
import { NavigationContainer } from "@react-navigation/native";
import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";


export default function App() {

  if (Platform.OS === 'android') { // only android needs polyfill
    require('intl'); // import intl object
    require('intl/locale-data/jsonp/pt-BR'); // load the required locale details
  }

  return (

    <ThemeProvider theme={theme}>
        <StatusBar style="light" />

        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>

    </ThemeProvider>
  );
}
