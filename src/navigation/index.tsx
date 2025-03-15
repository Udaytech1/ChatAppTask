import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationParams } from '../types';

// Import screens (we'll create these next)
import SetUsername from '../screens/SetUsername';
import RoomsList from '../screens/RoomsList';
import CreateRoom from '../screens/CreateRoom';
import ChatRoom from '../screens/ChatRoom';

const Stack = createNativeStackNavigator<Record<keyof NavigationParams, object>>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SetUsername">
        <Stack.Screen 
          name="SetUsername" 
          component={SetUsername}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="RoomsList" 
          component={RoomsList}
          options={{ title: 'Chat Rooms' }}
        />
        <Stack.Screen 
          name="CreateRoom" 
          component={CreateRoom}
          options={{ title: 'Create Room' }}
        />
        <Stack.Screen 
          name="ChatRoom" 
          component={ChatRoom}
          options={({ route }) => ({ 
            title: route.params?.roomName || 'Chat Room'
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}; 