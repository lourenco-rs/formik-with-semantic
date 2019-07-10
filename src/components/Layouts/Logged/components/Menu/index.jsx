import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default () => (
  <Menu>
    <Menu.Item>
      <Link to="/form1">Form1</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/login">Login</Link>
    </Menu.Item>
  </Menu>
);
