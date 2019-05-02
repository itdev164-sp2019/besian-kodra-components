// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { BaseContainer } from '../BaseContainer';

type Props = {
  children: PropTypes.node
};

export const Label = (props: PropTypes.node) => (
  <BaseContainer as='label' {...props} />
);

Label.propTypes = {
  children: PropTypes.node.isRequired
};
