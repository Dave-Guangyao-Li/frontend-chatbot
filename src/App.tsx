import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, IconButton } from '@mui/material';
import { createTheme, styled } from '@mui/material/styles';
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


const ResponsiveIconButton = styled(IconButton)(({ theme }) => ({
  position: 'fixed',
  top: '10px',
  left: '200px', // default for large screens
  zIndex: 2000,
  backgroundColor: '#1976d2',
  color: 'white',
  [theme.breakpoints.down('sm')]: {
    left: '160px',
    top: '64px'
  },
}));

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

  const toggleSideMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar onSearch={handleSearch} />
      <div style=
        {{marginTop: '64px', 
          display:'flex',
          height:'calc(100vh - 64px)',
          overflowY:'hidden'
          }}>
      {isMenuOpen &&<Sidemenu activePage={activePage} onPageChange={handlePageChange} onClose={() => setIsChatOpen(false)} />}
      <ResponsiveIconButton onClick={toggleSideMenu}>
        {isMenuOpen ? <ArrowBackIcon /> : <ArrowForwardIcon />}
      </ResponsiveIconButton>
      {/* Ensure content stretches fully */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {activePage === 'apps' ? (
          <AppsPage searchTerm={searchTerm} />
        ) : (
          <DocumentsPage searchTerm={searchTerm} />
        )}
      </div>
      {isChatOpen ? (
        <ChatWindow onClose={() => setIsChatOpen(false)} />
      ) : (
        <ChatButton onClick={toggleChat} />
      )}
      </div>
      
      
      
    </ThemeProvider>
  );
};

export default App;
