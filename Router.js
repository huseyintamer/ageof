import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import App from './App';

import Headlines from './HeadLines';
import HeadlinesDetail from './HeadLinesDetail';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Age of Empires" component={App} />
        <Stack.Screen name="Structures" component={Headlines} />
        <Stack.Screen  name="headlinesdetail" component={HeadlinesDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;