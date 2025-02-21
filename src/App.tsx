import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, IconButton } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Navbar from './components/layout/Navbar';
import Sidemenu from './components/layout/Sidemenu';
import ChatButton from './components/chatbot/ChatButton';
import ChatWindow from './components/chatbot/ChatWindow';
import AppsPage from './pages/AppsPage';
import DocumentsPage from './pages/DocumentsPage';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handlePageChange = (page: string) => {
    setActivePage(page);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar onSearch={handleSearch} />
      {isMenuOpen ? (
        <Sidemenu activePage={activePage} onPageChange={handlePageChange} />
      ) : null}
      <IconButton onClick={toggleMenu} style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 2000 }}>
        {isMenuOpen ? <ArrowBackIcon /> : <ArrowForwardIcon />}
      </IconButton>
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
