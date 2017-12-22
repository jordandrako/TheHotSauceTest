import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { colors } from '../theme/variables';

const Head = styled.header`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.4em;
  color: ${colors.orange};
  margin: 0.5em 0 1em;
  line-height: 1;
  text-shadow: 3px 3px 1px rgba(0, 0, 0, 0.7);
  transform: rotate(4deg);

  span:first-child {
    font-size: 0.6em;
    text-shadow: 2px 2px 0.3px rgba(0, 0, 0, 0.7);
  }

  span:last-child {
    font-size: 1.6em;
    text-shadow: 4px 4px 1.5px rgba(0, 0, 0, 0.7);
  }
`;

const SubTitle = styled.h2`
  display: block;
  padding: 0.3em;
  background: #111;
`;

const Header = () => (
  <Head>
    <Link to="/">
      <Title>
        <span>HOT</span> <span>HOT</span> <span>HOT</span>
      </Title>
    </Link>
    <SubTitle>CAN YOU HANDLE THE HEAT!?</SubTitle>
  </Head>
);

export default Header;
