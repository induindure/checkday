import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "../screens/home/SplashScreen";
import OnboardingScreen from "../screens/onboarding/OnboardingScreen";

import AuthNavigator from "./AuthNavigator";
import MainNavigator from "./MainNavigator";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
      />

      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
      />

      <Stack.Screen
        name="Auth"
        component={AuthNavigator}
      />

      <Stack.Screen
        name="Main"
        component={MainNavigator}
      />
    </Stack.Navigator>
  );
}