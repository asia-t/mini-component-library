/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--borderRadius": 4 + "px",
    "--height": 8 + "px",
  },
  medium: {
    "--borderRadius": 4 + "px",
    "--height": 12 + "px",
  },
  large: {
    display: 'flex',
    "--borderRadius": 8 + "px",
    "--height": 24 + "px",
  }
};

const innerBarLargeStyles = {
    "--height": 16 + "px",
    "--borderRadius": 4 + "px",
    "--margin": "4px"
}

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  const barStyles = size === 'large' ? innerBarLargeStyles : null;

  return <Wrapper role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" style={styles}>
    <Bar value={value} style={barStyles}/>
    <VisuallyHidden>{value}</VisuallyHidden>
  </Wrapper>
};

const Wrapper = styled.div`
  width: 100%;
  height: var(--height);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--borderRadius);
  overflow: hidden;
`

const Bar = styled.div`
  width: ${props => props.value}%;
  height: var(--height);
  background-color: ${COLORS.primary};
  margin: var(--margin);
  border-radius: var(--borderRadius) 0 0 var(--borderRadius);
  
`

export default ProgressBar;
