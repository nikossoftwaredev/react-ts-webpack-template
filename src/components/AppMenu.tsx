import { useState } from 'react';
import { MenuProps, Menu } from 'antd';
import { menuItems } from 'routes/menu-config';

const AppMenu: React.FC = () => {
  const [current, setCurrent] = useState('home');

  const onClick: MenuProps['onClick'] = e => {
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode='horizontal' items={menuItems} />;
};

export default AppMenu;
