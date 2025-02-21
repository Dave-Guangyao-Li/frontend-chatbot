import React from 'react';
import { Typography, Paper, styled } from '@mui/material';

const PageContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginLeft: '240px',
  marginTop: '64px',
  minHeight: 'calc(100vh - 64px)',
  backgroundColor: '#fff',
  [theme.breakpoints.down('sm')]: {
    marginLeft: '200px',
  },
}));

interface AppsPageProps {
  searchTerm: string;
}

const AppsPage: React.FC<AppsPageProps> = ({ searchTerm }) => {
  const content = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  ];

  const highlightText = (text: string) => {
    if (!searchTerm) return text;

    const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'));
    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === searchTerm.toLowerCase() ? (
            <mark key={i} style={{ backgroundColor: '#fff176', padding: 0 }}>
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </>
    );
  };

  const filteredContent = searchTerm
    ? content.filter((text) => text.toLowerCase().includes(searchTerm.toLowerCase()))
    : content;

  return (
    <PageContainer>
      <Typography variant="h4" gutterBottom>
        Apps
      </Typography>
      {filteredContent.map((text, index) => (
        <Typography key={index} paragraph>
          {highlightText(text)}
        </Typography>
      ))}
    </PageContainer>
  );
};

export default AppsPage; 