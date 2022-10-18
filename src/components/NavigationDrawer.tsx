import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import menuConfig from 'routes/menu-config';
import AppHeader from './core/AppHeader';

const drawerWidth = 240;

const NavigationDrawer = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppHeader drawerWidth={drawerWidth} />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box'
          }
        }}
        variant='permanent'
        anchor='left'
      >
        <Toolbar />
        <Divider />
        <List>
          {menuConfig.map((menu, idx) =>
            menu.type === 'Divider' ? (
              // eslint-disable-next-line react/no-array-index-key
              <Divider key={`divider${idx}`} />
            ) : (
              <Link key={menu.to || ''} to={menu.to || ''}>
                <ListItem key={menu.text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{menu.icon}</ListItemIcon>
                    <ListItemText primary={menu.text} />
                  </ListItemButton>
                </ListItem>
              </Link>
            )
          )}
        </List>
      </Drawer>
      <Box component='main' sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
};

export default NavigationDrawer;
