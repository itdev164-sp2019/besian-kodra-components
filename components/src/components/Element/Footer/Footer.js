// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { BaseContainer } from '../BaseContainer';

type Props = {
  children: PropTypes.node
};

export const Footer = (props: PropTypes.node) => (
  <BaseContainer as='footer' {...props} />
);

Footer.propTypes = {
  children: PropTypes.node.isRequired
};
