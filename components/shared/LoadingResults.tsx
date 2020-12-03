import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { SPINNER } from '../../assets/';

const Loading = styled.div`
  margin: 0 auto;
  height: 200px;
  width: 200px;

  img {
    object-fit: cover;
    background-blend-mode: screen;
  }

  p {
    text-align: center;
    font-size: 18px;
    margin-top: -3rem;
  }
`;

const LoadingResults = (): ReactElement => {
  return (
    <Loading>
      <img src={SPINNER} alt="spinning loading sign" />
      <p>Loading...</p>
    </Loading>
  );
};

export default LoadingResults;
