import React from 'react';
import styled from '@emotion/styled';

const User = styled.div`
  width: 400px;
  margin-top: 2rem;
  border: 1px solid purple;
`;
export default function UserDetails({ resource }) {
  const data = resource.read();
  return (
    <User>
      <img src="" alt="" />
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <div>
        <a href=""></a>
        <p></p>
      </div>
    </User>
  );
}
