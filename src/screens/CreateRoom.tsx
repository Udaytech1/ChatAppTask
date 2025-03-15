import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { NavigationParams } from '../types';
import { api } from '../services/api';

type Props = {
  navigation: NativeStackNavigationProp<NavigationParams, 'CreateRoom'>;
  route: RouteProp<NavigationParams, 'CreateRoom'>;
};

const CreateRoom: React.FC<Props> = ({ navigation, route }) => {
  const [roomName, setRoomName] = useState('');
  const { username } = route.params;

  const handleCreateRoom = async () => {
    if (!roomName.trim()) {
      Alert.alert('Error', 'Please enter a room name');
      return;
    }

    try {
      const newRoom = await api.createRoom(roomName, username);
      navigation.replace('ChatRoom', {
        roomId: newRoom.id,
        roomName: newRoom.name,
        username,
      });
    } catch (error) {
      Alert.alert('Error', 'Failed to create room. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter room name"
        value={roomName}
        onChangeText={setRoomName}
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={handleCreateRoom}>
        <Text style={styles.buttonText}>Create Room</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CreateRoom; 