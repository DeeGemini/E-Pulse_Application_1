// navigation/MainNavigator.js
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import CalendarScreen from '../screen/CalendarScreen';
import WallpaperScreen from '../screen/WallpaperScreen';

const Stack = createStackNavigator();

export default function MainNavigator() {
	return(
		<NavigationContainer>
		 <Stack.Navigator initialRouteName="Home">
		  <Stack.Screen name="Home" component={HomeScreen} />
		  <Stack.Screen name="Calendar" component={CalendarScreen} />
		  <Stack.Screen name="Wallpaper" component={WallpaperScreen} />
		 </Stack.Navigator>
		</NavigationContainer>
	);
}

