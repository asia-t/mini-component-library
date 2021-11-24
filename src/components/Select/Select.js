import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
      <Wrapper>
        <NativeSelect value={value} onChange={onChange}>
          {children}
        </NativeSelect>
        <PresentationLayer>
          {displayedValue}
          <ArrowDown id="chevron-down" size={24} strokeWidth={2} />
        </PresentationLayer>

      </Wrapper>

  );
};

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  cursor: pointer;
  z-index: 2;
`

const Wrapper = styled.div`
  position: relative;
  font-size: 1rem;
    appearance: none;
    position: relative;
    width: fit-content;
    cursor: pointer;
    isolation: isolate;
`

const PresentationLayer = styled.div`  
    color: ${COLORS.gray700};
    border-radius: 8px;
    border: none;
    background-color: ${COLORS.transparentGray15}; 
    padding: 12px 16px;
    padding-right: 52px;
    
    ${NativeSelect}:focus + & {
      outline: 5px auto hsla(218, 57%, 53%, 1) 
    }
    
    ${NativeSelect}:hover + & {
      color: ${COLORS.black}
    } 
`

const ArrowDown = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 12px;
  width: 24px;
  margin: auto;
  z-index:1;
`

export default Select;
