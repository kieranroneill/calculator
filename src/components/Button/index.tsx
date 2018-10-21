import * as React from 'react';
import styled from 'styled-components';

// Styles.
import palette from '../../styles/palette';

// Types.
import { InputKeyEnum, PurposeType } from './types';

const StyledButton = styled<{ purpose: PurposeType }, 'button'>('button')`
  background: none;
  border: solid 1px ${palette.primary.grey};
  cursor: pointer;
  font-size: 1.3rem;
  height: 3rem;
  line-height: 3rem;
  padding: 0;
  text-align: center;
  transition: 300ms;
  width: 100%;
  
  ${props => props.purpose === 'numeric' && `
    background-color: ${palette.primary.white};
    
    &:hover {
      background-color: ${palette.primary.grey};
    }
  `}
    ${props => props.purpose === 'operator' && `
    background-color: ${palette.primary.lightGrey};
    
    &:hover {
      background-color: ${palette.primary.grey};
    }
  `}
    ${props => props.purpose === 'execute' && `
    background-color: ${palette.brand.green500};
    
    &:hover {
      background-color: ${palette.brand.green300};
    }
  `}
`;

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: InputKeyEnum;
    purpose: PurposeType;
}

export const Button: React.SFC<Props> = (props: Props) => (
    <StyledButton {...props }>
        {props.label}
    </StyledButton>
);
