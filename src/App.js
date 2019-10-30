import React from 'react';
import styled from '@emotion/styled';
import './App.css';
import Button from './Button';

const Wrapper = styled.div`
  width: 400px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Wrapper>
      <div>
        {['nnnkit', 'getify', 'gaeron'].map(user => (
          <Button>{user}</Button>
        ))}
      </div>
    </Wrapper>
  );
}

export default App;
