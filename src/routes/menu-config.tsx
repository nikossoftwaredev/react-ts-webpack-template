import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';

interface MenuConfig {
  text?: string;
  icon?: JSX.Element;
  to?: string;
  type?: 'Divider';
}
const menuConfig: MenuConfig[] = [
  { text: 'Home', icon: <HomeIcon />, to: '/home' },
  { type: 'Divider' },
  { text: 'Counter', icon: <AddIcon />, to: '/counter' }
];

export default menuConfig;
