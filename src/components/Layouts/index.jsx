import React from 'react';
import PropTypes from 'prop-types';
import { Header, Segment } from 'semantic-ui-react';

import { Menu } from './Logged/components';

const LoggedLayout = ({ children: Page }) => (
  <div>
    <Header as="h1" color="brown" dividing>
      Formulário com Formic e Semantic-UI
    </Header>

    <Menu />

    <Segment>oi</Segment>

    <Segment raised>raised</Segment>

    {Page}
  </div>
);

LoggedLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoggedLayout;
