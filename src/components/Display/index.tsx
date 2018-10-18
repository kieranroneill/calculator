import * as React from 'react';
import styled from 'styled-components';

// Styles.
import palette from '../../styles/palette';

const Input = styled.input`
  border: 0;
  box-sizing : border-box;
  font-size: 2rem;
  padding: 0.75rem 0.5rem;
  text-align: right;
  width: 100%;
`;
const Wrapper = styled.div`
  border: 1px solid ${palette.primary.grey};
  margin: 0 0 1rem;
  width: 100%;
`;

export interface Props {
    value: string;
}

export const Display: React.SFC<Props> = (props: Props) => (
    <Wrapper>
        <Input
            readOnly
            value={props.value}
        />
    </Wrapper>
);
