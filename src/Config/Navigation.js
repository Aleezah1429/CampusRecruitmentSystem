import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../Components/Home";
import AdminSignUp from "../Components/AdminSignUp";
import StudentSignUp from "../Components/StudentSignUp";
import CompanySignUp from "../Components/CompanySignUp";
import AdminLogin from "../Components/AdminLogin";
import StudentLogin from "../Components/StudentLogin";
import CompanyLogin from "../Components/CompanyLogin";
import StudentInfo from "../Components/StudentInfo";
import CompanyInfo from "../Components/CompanyInfo";
import StudentPage from '../Components/StudentPage';
import CompanyPage from '../Components/CompanyPage';
import AdminPage from '../Components/AdminPage';
import StudentProfile from '../Components/StudentProfile';
import CompanyProfile from '../Components/CompanyProfile';

const Stack = createStackNavigator();
const Navigation = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="StudentSignUp" component={StudentSignUp} />
        <Stack.Screen name="CompanySignUp" component={CompanySignUp} />
        <Stack.Screen name="AdminSignUp" component={AdminSignUp} />
        <Stack.Screen name="StudentLogin" component={StudentLogin} />
        <Stack.Screen name="CompanyLogin" component={CompanyLogin} />
        <Stack.Screen name="AdminLogin" component={AdminLogin} />
        <Stack.Screen name="StudentInfo" component={StudentInfo} />
        <Stack.Screen name="CompanyInfo" component={CompanyInfo}/>
        <Stack.Screen name="StudentPage" component={StudentPage} />
        <Stack.Screen name="CompanyPage" component={CompanyPage} />
        <Stack.Screen name="AdminPage" component={AdminPage} />
        <Stack.Screen name="StudentProfile" component={StudentProfile} />
        <Stack.Screen name="CompanyProfile" component={CompanyProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  )

}
export default Navigation;