import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AppMain from "./components/AppMain";
import AboutPage from "./components/AboutPage"; // Assuming you've created AboutPage.js

const Stack = createStackNavigator();

const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={AppMain}
          options={{ title: "Plaster Calculator" }}
        />
        <Stack.Screen
          name="About"
          component={AboutPage}
          options={{ title: "About" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
