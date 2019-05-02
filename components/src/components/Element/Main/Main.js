// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { BaseContainer } from '../BaseContainer';

type Props = {
  children: PropTypes.node
};

export const Main = (props: PropTypes.node) => (
  <BaseContainer as='main' {...props} />
);

Main.propTypes = {
  children: PropTypes.node.isRequired
};
