import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./components/home";
import { UserDetails } from "./components/user-details";
import {CameraComponent as Camera} from './components/camera'
const Navigator = createNativeStackNavigator();

export const AppRouter = () => (
  <NavigationContainer>
    <Navigator.Navigator>
      <Navigator.Screen
        options={{
          title: "Home screen",
        }}
        name="Home"
        component={Home}
      />
      <Navigator.Screen
        name="Profile"
        component={UserDetails}
      />
      <Navigator.Screen
        name="camera"
        component={Camera}
      />
    </Navigator.Navigator>
  </NavigationContainer>
);
