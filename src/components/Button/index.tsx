import * as React from 'react';
import styled from 'styled-components';

// Styles.
import palette from '../../styles/palette';

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
  width: 4rem;
  
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

export type PurposeType = 'numeric'
    | 'operator'
    | 'execute';

export enum InputKeyEnum {
    Addition = '+',
    Clear = 'AC',
    Decimal = '.',
    Division = '÷',
    Eight = '8',
    Five = '5',
    Four = '4',
    Nine = '9',
    Multiplication = '×',
    One = '1',
    Result = '=',
    Seven = '7',
    Six = '6',
    Subtraction = '-',
    Three = '3',
    Two = '2',
    Zero = '0',
}

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: InputKeyEnum;
    purpose: PurposeType;
}

export const Button: React.SFC<Props> = (props: Props) => (
    <StyledButton purpose={props.purpose}>
        {props.label}
    </StyledButton>
);
