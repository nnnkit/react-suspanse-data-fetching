import React from 'react';
import styled from '@emotion/styled';

const MyButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid tomato;
  margin: 2px;
  font-size: 1.25rem;
`;

export default function Button({ children }) {
  return <MyButton>{children}</MyButton>;
}
