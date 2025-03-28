import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Typography,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const drawerWidth = 334;

const StyledDrawer = styled(Drawer)({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
    borderRight: '1px solid #E0E0E0',
    backgroundColor: '#FFFFFF',
  },
});

const DrawerContent = styled(Box)({
  marginTop: '200px', // Match the new header height
  padding: '24px 0',
});

const MenuItem = styled(ListItemButton)({
  margin: '16px 0',
  padding: '0 77px',
  '&.Mui-selected': {
    backgroundColor: '#F5F5F5',
    borderRadius: '17px',
    '& .MuiListItemText-primary': {
      color: '#C00000',
    },
  },
  '&:hover': {
    backgroundColor: '#F5F5F5',
    borderRadius: '17px',
  },
});

const MenuText = styled(Typography)({
  fontSize: '32px',
  fontWeight: 600,
  lineHeight: '40px',
});

export const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'DeepSight', path: '/deepsight' },
    { text: 'Dailypaper', path: '/dailypaper' },
    { text: 'Dailynews', path: '/dailynews' },
  ];

  return (
    <StyledDrawer variant="permanent">
      <DrawerContent>
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <MenuItem
                selected={location.pathname === item.path}
                onClick={() => navigate(item.path)}
              >
                <ListItemText
                  primary={<MenuText>{item.text}</MenuText>}
                  sx={{ textAlign: 'left' }}
                />
              </MenuItem>
            </ListItem>
          ))}
        </List>
      </DrawerContent>
    </StyledDrawer>
  );
}; 