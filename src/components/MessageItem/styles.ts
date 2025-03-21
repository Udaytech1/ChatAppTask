import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  messageContainer: {
    marginBottom: 12,
    maxWidth: '80%',
    padding: 12,
    borderRadius: 16,
  },
  currentUserMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#d4ddfa',
  },
  otherUserMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#E9ECEF',
  },
  systemMessage: {
    alignSelf: 'center',
    backgroundColor: 'transparent',
    padding: 8,
  },
  username: {
    fontSize: 12,
    marginBottom: 4,
    color: '#666',
  },
  currentUserUsername: {
    color: '#060e2b',
  },
  messageText: {
    fontSize: 16,
  },
  systemMessageText: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
}); 