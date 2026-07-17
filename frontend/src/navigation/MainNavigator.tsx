import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import HomeScreen from "../screens/home/HomeScreen";
import TasksScreen from "../screens/tasks/TasksScreen";
import CalendarScreen from "../screens/calendar/CalendarScreen";
import HabitsScreen from "../screens/habits/HabitsScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";

import { colors } from "../theme/colors";

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.disabled,

        tabBarStyle: {
          height: 65,
          paddingBottom: 8,
          paddingTop: 8,
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
        },

        tabBarIcon: ({ color, size }) => {
          let iconName:
            | "home"
            | "check-circle"
            | "calendar-month"
            | "fire"
            | "account";

          switch (route.name) {
            case "Home":
              iconName = "home";
              break;
            case "Tasks":
              iconName = "check-circle";
              break;
            case "Calendar":
              iconName = "calendar-month";
              break;
            case "Habits":
              iconName = "fire";
              break;
            default:
              iconName = "account";
          }

          return (
            <MaterialCommunityIcons
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Tasks" component={TasksScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Habits" component={HabitsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}