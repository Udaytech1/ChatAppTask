import React from 'react';
import { View, Text } from 'react-native';
import { Message } from '../../types';
import { styles } from './styles';

interface MessageItemProps {
  message: Message;
  currentUsername: string;
}

const MessageItem: React.FC<MessageItemProps> = ({ message, currentUsername }) => {
  const isCurrentUser = message.username === currentUsername;
  const isSystem = message.username === 'System';

  return (
    <View
      style={[
        styles.messageContainer,
        isSystem
          ? styles.systemMessage
          : isCurrentUser
          ? styles.currentUserMessage
          : styles.otherUserMessage,
      ]}
    >
      {!isSystem && (
        <Text style={styles.username}>
          {isCurrentUser ? 'You' : message.username}
        </Text>
      )}
      <Text
        style={[
          styles.messageText,
          isSystem && styles.systemMessageText,
        ]}
      >
        {message.content}
      </Text>
    </View>
  );
};

export default MessageItem; 