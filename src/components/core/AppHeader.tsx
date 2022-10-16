import { AppBar, Toolbar, Typography } from '@mui/material';

interface AppHeaderProps {
  drawerWidth?: number;
}

const AppHeader = ({ drawerWidth = 0 }: AppHeaderProps) => {
  return (
    <AppBar
      position='fixed'
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
    >
      <Toolbar>
        <Typography variant='h6' noWrap component='div'>
          React Template
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
