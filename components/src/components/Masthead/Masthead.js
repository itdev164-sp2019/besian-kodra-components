import React from 'react';
import { Box } from 'rebass';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Outer = styled(Box)`
  height: ${props => props.height};
  width: 100%;
  margin-bottom: 1.45rem;
  line-height: 70px;
  font-size: 200%;
  color: #fff;
  text-decoration: 'none';
  font-family: 'Electrolize';
`;

export const Masthead = ({ height, children }) => {
  return <Outer height={height}>{children}</Outer>;
};

Masthead.propTypes = {
  height: PropTypes.string.isRequired,
  siteTitle: PropTypes.string
};
