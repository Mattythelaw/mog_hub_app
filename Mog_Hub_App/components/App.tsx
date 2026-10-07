import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//Importing active screen components
import MainScreen from './MainScreen';
import Bookings from './Bookings';
import Gallery from './Gallery';
import Membership from './Membership';
import Volunteer from './Volunteer';

// Names of all the the tabs 
export type TabParamList = {
  Home: undefined;
  Bookings: undefined;
  Gallery: undefined;
  Membership: undefined;
  Volunteer: undefined;
};

// Adding the navigator which switches between screens
