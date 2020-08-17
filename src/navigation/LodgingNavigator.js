import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LodgingsScreen from '../screens/LodgingsScreen';
import LodgingDetailScreen from '../screens/LodgingDetailScreen';
import LodgingsMapScreen from '../screens/LodgingsMapScreen';


const Stack = createStackNavigator();

const LodgingNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Lodgings" component={LodgingsScreen} />
      <Stack.Screen name="Lodging-Detail" component={LodgingDetailScreen} />
      <Stack.Screen name="Lodgings-Maps" component={LodgingsMapScreen} />
    </Stack.Navigator>
  );
};

export default LodgingNavigator;