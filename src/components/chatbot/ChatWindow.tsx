import React, { useState, useRef, useEffect } from 'react';
import { Paper, TextField, IconButton, Typography, Box, styled } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import RefreshIcon from '@mui/icons-material/Refresh';

const ChatWindowContainer = styled(Paper)(({ theme }) => ({
  position: 'fixed',
  bottom: '80px',
  right: '20px',
  width: '400px',
  height: '600px',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: '100%',
    bottom: 0,
    right: 0,
  },
}));

const Header = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: '#1976d2',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const MessageContainer = styled(Box)({
  flex: 1,
  overflowY: 'auto',
  padding: '16px',
});

const Message = styled(Box)<{ isUser?: boolean }>(({ isUser }) => ({
  display: 'flex',
  justifyContent: isUser ? 'flex-end' : 'flex-start',
  marginBottom: '8px',
}));

const MessageContent = styled(Paper)<{ isUser?: boolean }>(({ isUser, theme }) => ({
  padding: theme.spacing(1, 2),
  maxWidth: '70%',
  backgroundColor: isUser ? '#1976d2' : '#f5f5f5',
  color: isUser ? 'white' : 'inherit',
}));

const InputContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid #e0e0e0',
  display: 'flex',
  gap: theme.spacing(1),
}));

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

interface ChatWindowProps {
  onClose: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [timer, setTimer] = useState(0);
  const messageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToBottom = () => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        id: Date.now(),
        text: inputValue,
        isUser: true,
      };
      setMessages((prev) => [...prev, newMessage]);
      setInputValue('');

      // Simulate bot response
      setTimeout(() => {
        const botResponse: Message = {
          id: Date.now() + 1,
          text: "I'm here to help!",
          isUser: false,
        };
        setMessages((prev) => [...prev, botResponse]);
      }, 1000);
    }
  };

  const handleReset = () => {
    setMessages([]);
    setTimer(0);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <ChatWindowContainer elevation={3}>
      <Header>
        <Typography variant="h6">{timer}s</Typography>
        <Box>
          <IconButton color="inherit" onClick={handleReset} size="small">
            <RefreshIcon />
          </IconButton>
          <IconButton color="inherit" onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </Header>
      <MessageContainer ref={messageContainerRef}>
        {messages.map((message) => (
          <Message key={message.id} isUser={message.isUser}>
            <MessageContent isUser={message.isUser} elevation={1}>
              <Typography>{message.text}</Typography>
            </MessageContent>
          </Message>
        ))}
      </MessageContainer>
      <InputContainer>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type your message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          size="small"
        />
        <IconButton color="primary" onClick={handleSend} disabled={!inputValue.trim()}>
          <SendIcon />
        </IconButton>
      </InputContainer>
    </ChatWindowContainer>
  );
};

export default ChatWindow; 