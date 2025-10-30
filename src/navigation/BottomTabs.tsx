import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from '../screens/DashboardScreen';
import ClassesScreen from '../screens/ClassesScreen';
import ReportsScreen from '../screens/ReportsScreen';
import ParentsScreen from '../screens/ParentsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { View } from 'react-native';
import AttendanceScreen from '../screens/AttendanceScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
  <Tab.Screen name="Dashboard" component={DashboardScreen} />
  <Tab.Screen name="Attendance" component={AttendanceScreen} />
  <Tab.Screen name="Classes" component={ClassesScreen} />
  <Tab.Screen name="Reports" component={ReportsScreen} />
  <Tab.Screen name="Parents" component={ParentsScreen} />
  <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
