import React from 'react';
import { Box, Container } from '@mui/material';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { styled } from '@mui/material/styles';

const MainContent = styled(Box)({
  flexGrow: 1,
  padding: '24px',
  marginLeft: '334px',
  backgroundColor: '#FFFFFF',
  minHeight: '100vh',
});

const ContentContainer = styled(Container)({
  marginTop: '200px',
  paddingTop: '24px',
});

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Sidebar />
      <MainContent>
        <ContentContainer maxWidth={false}>
          {children}
        </ContentContainer>
      </MainContent>
    </Box>
  );
}; 