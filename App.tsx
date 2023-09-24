const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import HomeScreen from "./screens/HomeScreen";
import AndroidSmall1 from "./screens/AndroidSmall1";
import StarHalf from "./components/StarHalf";
import ContactUs from "./screens/ContactUs";
import ContactUs1 from "./screens/ContactUs1";
import ALERTLocationPermisssion from "./screens/ALERTLocationPermisssion";
import Feedback from "./screens/Feedback";
import Dashboard from "./screens/Dashboard";
import Dashboard1 from "./screens/Dashboard1";
import Dashboard2 from "./screens/Dashboard2";
import LoginPage from "./screens/LoginPage";
import VerificationOfEmail from "./screens/VerificationOfEmail";
import NewDetails from "./screens/NewDetails";
import Registration from "./screens/Registration";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Mitr-Regular": require("./assets/fonts/Mitr-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidSmall1"
              component={AndroidSmall1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ContactUs"
              component={ContactUs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ContactUs1"
              component={ContactUs1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ALERTLocationPermisssion"
              component={ALERTLocationPermisssion}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Feedback"
              component={Feedback}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Dashboard1"
              component={Dashboard1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Dashboard2"
              component={Dashboard2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginPage"
              component={LoginPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VerificationOfEmail"
              component={VerificationOfEmail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewDetails"
              component={NewDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Registration"
              component={Registration}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
