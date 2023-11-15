import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ScreenHeaderBtn from "./components/common/header/ScreenHeaderBtn";
import { icons, images } from "./constants";
import DetailsScreen from "./screens/DetailsScreen";
import SearchScreen from "./screens/SearchScreen";
import { useState } from "react";
const Stack = createNativeStackNavigator();
export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Home",
            headerTitleAlign: "center",
            headerLeft: (props) => (
              <ScreenHeaderBtn
                dimension="100%"
                iconUrl={icons.back}
                home={true}
              />
            ),
            headerRight: (props) => (
              <ScreenHeaderBtn
                dimension="100%"
                iconUrl={images.profile}
                home={true}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: "Details",
            headerTitleAlign: "center",
            headerLeft: (props) => (
              <ScreenHeaderBtn
                dimension="100%"
                iconUrl={icons.back}
                home={false}
              />
            ),
            headerRight: (props) => (
              <ScreenHeaderBtn
                dimension="100%"
                iconUrl={images.profile}
                home={false}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{
            title: "Search",
            headerTitleAlign: "center",
            headerLeft: (props) => (
              <ScreenHeaderBtn
                dimension="100%"
                iconUrl={icons.back}
                home={false}
              />
            ),
            headerRight: (props) => (
              <ScreenHeaderBtn
                dimension="100%"
                iconUrl={images.profile}
                home={false}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
