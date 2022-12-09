import React from "react";
import { useTheme } from "styled-components";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const { Navigator, Screen } = createBottomTabNavigator();

import { Atividade2 } from "../pages/atividade2";

import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Atividade4 } from "../pages/atividade4";
import { Atividade5 } from "../pages/atividade5";
import { Atividade6 } from "../pages/atividade6";

export default function AppRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabelPosition: "below-icon",
        tabBarStyle: {
          height: 72,
        },
      }}
    >
      <Screen
        name="Atividade 2"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="list" size={size} color={color} />
          ),
        }}
        component={Atividade2}
      />

      <Screen
        
        name="Atividade 4"
        component={Atividade4}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="attach-money" size={size} color={color} />
          ),
          unmountOnBlur: true
        }}
      />
      <Screen
        name="Atividade 5"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="pie-chart" size={size} color={color} />
          ),
        }}
        component={Atividade5}
      />
      <Screen
        name="Atividade 6"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="pie-chart" size={size} color={color} />
          ),
        }}
        component={Atividade6}
      />
    </Navigator>
  );
}
