import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "./src/global/styles/theme";
import AppRoutes from "./src/routes/app.routes";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";


export default function App() {

  return (
    <ThemeProvider theme={theme}>
        <StatusBar style="light" />
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>

    </ThemeProvider>
  );
}
