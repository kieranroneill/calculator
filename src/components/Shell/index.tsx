import * as React from 'react';
import styled from 'styled-components';

// Styles.
import palette from '../../styles/palette';

const Wrapper = styled.div`
  background-color: ${palette.primary.grey};
  display: flex;
  flex-direction: column;
  font-size: 100%;
  font-family: "Roboto", sans-serif;
  min-height: 100vh;
  width: 100%;
`;

export interface Props {
    children: React.ReactNode;
}

export const Shell: React.SFC<Props> = (props: Props) => (
    <Wrapper>
        {props.children}
    </Wrapper>
);
