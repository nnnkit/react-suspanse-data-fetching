import React from 'react';
import styled from '@emotion/styled';

const MyButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1.5px solid tomato;
  margin: 2px;
  font-size: 1.25rem;
  border-radius: 4px;
`;

export default function Button({ children }) {
  return <MyButton>{children}</MyButton>;
}
