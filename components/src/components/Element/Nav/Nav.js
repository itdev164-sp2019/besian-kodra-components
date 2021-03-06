// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { BaseContainer } from '../BaseContainer';

type Props = {
  children: PropTypes.node
};

export const Nav = (props: PropTypes.node) => (
  <BaseContainer as='nav' {...props} />
);

Nav.propTypes = {
  children: PropTypes.node.isRequired
};
