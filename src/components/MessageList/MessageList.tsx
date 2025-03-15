import React, { useRef } from 'react';
import { FlatList } from 'react-native';
import { Message } from '../../types';
import MessageItem from '../MessageItem/MessageItem';
import { styles } from './styles';

interface MessageListProps {
  messages: Message[];
  currentUsername: string;
}

const MessageList: React.FC<MessageListProps> = ({ messages, currentUsername }) => {
  const flatListRef = useRef<FlatList>(null);

  return (
    <FlatList
      ref={flatListRef}
      data={messages}
      renderItem={({ item }) => (
        <MessageItem message={item} currentUsername={currentUsername} />
      )}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.messagesList}
      onContentSizeChange={() => flatListRef.current?.scrollToEnd()}
      onLayout={() => flatListRef.current?.scrollToEnd()}
    />
  );
};

export default MessageList; 