import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { NavigationParams, Message, WebSocketMessage } from '../types';
import { api } from '../services/api';
import { websocketService } from '../services/websocket';
import MessageList from '../components/MessageList/MessageList';
import MessageInput from '../components/MessageInput/MessageInput';

type Props = {
  navigation: NativeStackNavigationProp<NavigationParams, 'ChatRoom'>;
  route: RouteProp<NavigationParams, 'ChatRoom'>;
};

const ChatRoom: React.FC<Props> = ({ navigation, route }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const { roomId, username } = route.params;

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const fetchedMessages = await api.getMessages(roomId);
        setMessages(fetchedMessages);
      } catch (error) {
        Alert.alert('Error', 'Failed to load messages');
      }
    };

    const connectWebSocket = async () => {
      try {
        await websocketService.connect(roomId, username);
        setIsConnected(true);
      } catch (error) {
        Alert.alert('Error', 'Failed to connect to chat'+username+roomId);
      }
    };

    loadMessages();
    connectWebSocket();

    websocketService.onMessage((message: WebSocketMessage) => {
      if (message.event === 'message') {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString(),
            content: message.content,
            username: message.username || 'Unknown',
            roomId,
            timestamp: new Date().toISOString(),
          },
        ]);
      } else if (message.event === 'join' || message.event === 'leave') {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString(),
            content: message.content,
            username: 'System',
            roomId,
            timestamp: new Date().toISOString(),
          },
        ]);
      }
    });

    return () => {
      websocketService.disconnect();
    };
  }, [roomId, username]);

  const handleSendMessage = async (message: string) => {
    try {
      websocketService.sendMessage(message);
    } catch (error) {
      Alert.alert('Error', 'Failed to send message');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
    >
      <MessageList messages={messages} currentUsername={username} />
      <MessageInput onSendMessage={handleSendMessage} isConnected={isConnected} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ChatRoom; 