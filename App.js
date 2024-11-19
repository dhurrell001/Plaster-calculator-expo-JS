import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AppMain from "./components/appMain";
import AboutPage from "./components/aboutPage";
import InstructionPage from "./components/instructionPage";
import { Ionicons } from "@expo/vector-icons";
import { AppProvider } from "./components/appMainContext";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="AppMain"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === "AppMain") {
                iconName = "home-outline";
              } else if (route.name === "About") {
                iconName = "information-circle-outline";
              } else if (route.name === "Instructions") {
                iconName = "document-text-outline";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "darkgrey",
            tabBarInactiveTintColor: "slategrey",
            tabBarLabelStyle: { fontSize: 14 }, // Adjust font size here
            tabBarStyle: {
              height: 60,
              paddingBottom: 10,
              paddingTop: 5,
              borderTopColor: "black",
              backgroundColor: "antiquewhite",
            },
          })}
        >
          <Tab.Screen
            name="AppMain"
            component={AppMain}
            options={{ title: "Calculator" }}
          />
          <Tab.Screen name="Instructions" component={InstructionPage} />
          <Tab.Screen name="About" component={AboutPage} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
