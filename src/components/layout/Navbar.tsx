import React from 'react';
import { AppBar, Toolbar, InputBase, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#f5f5f5',
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Logo = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  '& img': {
    width: '32px',
    height: '32px',
  },
  '& span': {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#1976d2',
  },
});

interface NavbarProps {
  onSearch: (searchTerm: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  return (
    <AppBar position="fixed" color="default" elevation={1}>
      <Toolbar>
        <Logo>
          <img src="/logo.svg" alt="ChatBot Logo" />
          <span>ChatBot</span>
        </Logo>
        <div style={{ flexGrow: 1 }} />
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            onChange={(e) => onSearch(e.target.value)}
          />
        </Search>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 