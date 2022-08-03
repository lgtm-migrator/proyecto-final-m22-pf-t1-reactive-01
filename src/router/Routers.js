import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../components/Drawer/CustomDrawer';

import {
  Home,
  Splash,
  Onboarding,
  Login,
  ResetPassword,
  HomeClient,
  SignInScreen,
} from '../screens/index';
import UploadPets from '../screens/Client/Upload/UploadPets';
import PetInfo from '../screens/Client/Home/PetInfo/PetInfo';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Menus = () => {
  return (
    <Drawer.Navigator screenOptions={{headerTitle: ''}}>
      <Drawer.Screen name="HomeClient" component={HomeClient} />
    </Drawer.Navigator>
  );
};
const Routers = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Menus"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Menus" component={Menus} />
        <Stack.Screen name="SplashScreen" component={Splash} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="UploadPets" component={UploadPets} />
        <Stack.Screen name="PetInfo" component={PetInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routers;
