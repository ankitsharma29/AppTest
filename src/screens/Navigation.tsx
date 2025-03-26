import { View, Text, StatusBar, Platform } from "react-native";
import React, { useEffect } from "react";
import HomeScreen from "./Home/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "../resource/theme/color";
import SplashScreen from "./splash/SplashScreen";

const Stack = createNativeStackNavigator();

const stackScreenOptions = {
  headerShown: false,
  gestureDirection: "horizontal",
  headerMode: "screen",
  headerTintColor: "black",
  headerTitleAlign: "center",
  headerStyle: { backgroundColor: Colors.orange1() },
  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};
const Navigation = () => {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={Colors.white()}
        // barStyle={"dark-content"}
        translucent={false}
      />
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={stackScreenOptions}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "Get more view & Watch Time",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
