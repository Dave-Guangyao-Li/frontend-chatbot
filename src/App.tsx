import React, { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Navbar from './components/layout/Navbar';
import Sidemenu from './components/layout/Sidemenu';
import ChatButton from './components/chatbot/ChatButton';
import ChatWindow from './components/chatbot/ChatWindow';
import AppsPage from './pages/AppsPage';
import DocumentsPage from './pages/DocumentsPage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

const App: React.FC = () => {
  const [activePage, setActivePage] = useState('apps');
  const [searchTerm, setSearchTerm] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handlePageChange = (page: string) => {
    setActivePage(page);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar onSearch={handleSearch} />
      <Sidemenu activePage={activePage} onPageChange={handlePageChange} />
      {activePage === 'apps' ? (
        <AppsPage searchTerm={searchTerm} />
      ) : (
        <DocumentsPage searchTerm={searchTerm} />
      )}
      {isChatOpen ? (
        <ChatWindow onClose={() => setIsChatOpen(false)} />
      ) : (
        <ChatButton onClick={toggleChat} />
      )}
    </ThemeProvider>
  );
};

export default App;
