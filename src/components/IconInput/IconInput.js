import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const SIZES = {
    small: {
      iconSize: 14 + 'px',
      textSize: 14 + 'px',
      plFontWeight: 400,
      fontWeight: 700,
      borderWeight: 1 + 'px'
    },

    large: {
      iconSize: 18 + 'px',
      textSize: 18 + 'px',
      plFontWeight: 400,
      fontWeight: 700,
      borderWeight: 2 + 'px'
    }
  }

  const styles = SIZES[size]

  const textInputStyles = {
    '--fontSize': styles.textSize,
    '--plFontWeight': styles.plFontWeight,
    '--fontWeight': styles.fontWeight,
  }

  return (
      <InputWrapper style={{'--width': width + 'px', '--borderWeight': styles.borderWeight}}>
        <VisuallyHidden>
          {label}
        </VisuallyHidden>
        <IconWrapper id={icon} size={styles.iconSize}/>
        <TextInput type="text" placeholder={placeholder} style={textInputStyles} />

      </InputWrapper>
  )
};

const TextInput = styled.input`
  border: none;
  width: 100%;
  height: 100%;
  padding-left: 24px;
  font-weight: var(--fontWeight);
  color: inherit;
  font-size: var(--fontSize);
  outline-offset: 2px;
  
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: var(--plFontWeight);
  }
`

const InputWrapper = styled.div`
  border-bottom: var(--borderWeight) solid ${COLORS.black};
  position: relative;
  width: var(--width);
  color: ${COLORS.gray700};
  
  &:hover {
    color: ${COLORS.black}
  }
`

const IconWrapper = styled(Icon)`
  position: absolute;
  top: 2px;
  left: 0;
`

export default IconInput;
