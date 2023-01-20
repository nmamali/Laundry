/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {AntDesign, FontAwesome} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/Modals/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';;
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import HomeScreen from "../screens/Checkout/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import LoginScreen from "../screens/Auth/LoginScreen";
import AddDetailsScreen from "../screens/Checkout/AddDetailsScreen";
import MoreOptionsScreen from "../screens/Checkout/MoreOptionsScreen";
import DeliveryDetailsScreen from "../screens/Checkout/DeliveryDetailsScreen";
import PaymentScreen from "../screens/Checkout/PaymentScreen";
import OrderConfirmationScreen from "../screens/Checkout/OrderConfirmationScreen";
import {useContext} from "react";
import {LoginContext} from "../context/LoginContext";
import SignupScreen from "../screens/Auth/SignupScreen";
import SelectItemsToIronScreen from "../screens/Modals/SelectItemsToIronScreen";

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {/*theme={DefaultTheme}>*/}

      <RootNavigator  />
    </NavigationContainer>
  );
}



/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
    const { isLoggedIn } = useContext(LoginContext);
  return (
    <Stack.Navigator>
        {!isLoggedIn &&
            <>
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ title: 'Login' }}
                />
                <Stack.Screen name="SignUp" component={SignupScreen} options={{ title: 'SignUp!' }} />
            </>

        }
        {isLoggedIn &&
            <>
                <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
                <Stack.Screen name="AddDetails" component={AddDetailsScreen} options={{ title: 'Add Details' }} />
                <Stack.Screen name="MoreOptions" component={MoreOptionsScreen} options={{ title: 'More Details' }} />
                <Stack.Screen name="DeliveryDetails" component={DeliveryDetailsScreen} options={{ title: 'Delivery Details' }} />
                <Stack.Screen name="Payment" component={PaymentScreen} options={{ title: 'Select Payment' }} />
                <Stack.Screen name="OrderConfirmation" component={OrderConfirmationScreen} options={{ title: 'Order Confirmation' }} />
                <Stack.Group
                    screenOptions={{
                        presentation: 'modal',
                }}
                >
                    <Stack.Screen name="Modal" component={ModalScreen} options={{}} />
                    <Stack.Screen name="SelectItemsToIron" component={SelectItemsToIronScreen} />
                </Stack.Group>
            </>
        }

    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Login"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'Home',
          tabBarIcon: ({ color }) => <AntDesign name="home" color={color} size={30}/>
        })}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <AntDesign name="setting" color={color} size={30}/>,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
