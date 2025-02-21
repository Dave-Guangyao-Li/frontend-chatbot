import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Paper, styled, IconButton } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import DescriptionIcon from '@mui/icons-material/Description';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const SideMenuContainer = styled(Paper)(({ theme }) => ({
  width: '240px',
  height: '100vh',
  position: 'fixed',
  top: 0,
  left: 0,
  paddingTop: '64px',
  backgroundColor: '#fff',
  [theme.breakpoints.down('sm')]: {
    width: '200px',
  },
}));

const MenuItem = styled(ListItem)<{ active?: boolean }>(({ active }) => ({
  backgroundColor: active ? '#e3f2fd' : 'transparent',
  '&:hover': {
    backgroundColor: '#f5f5f5',
  },
  cursor: 'pointer',
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  // position: 'absolute',
  top: '10px',
  left: '10px',
  zIndex: 2000,
  [theme.breakpoints.down('sm')]: {
    display: 'block',
  },
}));

interface SidemenuProps {
  activePage: string;
  onPageChange: (page: string) => void;
}

const Sidemenu: React.FC<SidemenuProps> = ({ activePage, onPageChange }) => {
  return (
    <SideMenuContainer elevation={1}>
      <List>
        <MenuItem
          active={activePage === 'apps'}
          onClick={() => onPageChange('apps')}
        >
          <ListItemIcon>
            <AppsIcon color={activePage === 'apps' ? 'primary' : 'inherit'} />
          </ListItemIcon>
          <ListItemText primary="Apps" />
        </MenuItem>
        <MenuItem
          active={activePage === 'documents'}
          onClick={() => onPageChange('documents')}
        >
          <ListItemIcon>
            <DescriptionIcon color={activePage === 'documents' ? 'primary' : 'inherit'} />
          </ListItemIcon>
          <ListItemText primary="Documents" />
        </MenuItem>
      </List>
    </SideMenuContainer>
  );
};

export default Sidemenu; 