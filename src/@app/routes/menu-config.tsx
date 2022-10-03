import { Navigate } from 'react-router-dom';
import { MailOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';
import ReduxCounter from '@app/components/ReduxCounter';

export const menuItems: MenuProps['items'] = [
  {
    icon: <MailOutlined />,
    key: 'home',
    label: <Navigate to='home' />
  },
  {
    icon: <ReduxCounter />,
    key: 'counter',
    label: <Navigate to='counter' />
  }
];
