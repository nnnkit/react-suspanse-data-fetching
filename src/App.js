import React, { Suspense } from 'react';
import styled from '@emotion/styled';
import './App.css';
import Button from './Button';
import UserDetails from './UserDetails';
import createResouce from './utils/createResource';

const userData = createResouce(
  fetch(`https://api.github.com/users/nnnkit`)
    .then(res => res.json())
    .then(user => user),
);

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
      <Suspense fallback={<h1>Loading</h1>}>
        <div>
          {['nnnkit', 'getify', 'gaeron'].map(user => (
            <Button>{user}</Button>
          ))}

          <UserDetails resource={userData} />
        </div>
      </Suspense>
    </Wrapper>
  );
}

export default App;
