import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator, MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';

//Importing active screen components
import MainScreen from './components/MainScreen'
import Bookings from './components/Bookings';
import Gallery from './components/Gallery';
import Membership from './components/Membership';
import Volunteer from './components/Volunteer';
import { StatusBar } from 'expo-status-bar';

// Names of all the the tabs 
export type TabParamList = {
  Home: undefined;
  Bookings: undefined;
  Gallery: undefined;
  Membership: undefined;
  Volunteer: undefined;
};

// Adding the navigator which switches between screens
const Tab = createMaterialTopTabNavigator<TabParamList>();

// Added the prop types so that each screen can use navigation
export type MainScreenProps = MaterialTopTabScreenProps<TabParamList, 'Home'>;
export type BookingsProps = MaterialTopTabScreenProps<TabParamList, 'Bookings'>;
export type GalleryProps = MaterialTopTabScreenProps<TabParamList, 'Gallery'>;
export type MembershipProps = MaterialTopTabScreenProps<TabParamList, 'Membership'>;
export type VolunteerProps = MaterialTopTabScreenProps<TabParamList, 'Volunteer'>;

export default function App() {
  return (
    <NavigationContainer>

      <StatusBar style="auto" />

      <Tab.Navigator screenOptions={{tabBarStyle: { marginTop: 30}, tabBarScrollEnabled: true,}}>

        <Tab.Screen name="Home" component={MainScreen} />

        <Tab.Screen name="Bookings" component={Bookings} />

        <Tab.Screen name="Gallery" component={Gallery} />

        <Tab.Screen name="Membership" component={Membership} />

        <Tab.Screen name="Volunteer" component={Volunteer} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}


