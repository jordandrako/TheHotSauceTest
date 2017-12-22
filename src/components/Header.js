import React from 'react';
import styled from 'styled-components';

const Head = styled.header`
  text-align: center;
`;

const Title = styled.h1`
  transform: rotate(4deg);
  span:first-child {
    font-size: 0.6em;
  }
  span:last-child {
    font-size: 1.6em;
  }
`;

const Header = () => (
  <Head>
    <Title>
      <span>HOT</span> <span>HOT</span> <span>HOT</span>
    </Title>
    <h2>CAN YOU HANDLE THE HEAT!?</h2>
  </Head>
);

export default Header;
