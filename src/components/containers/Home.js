import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import HotSauce from '../HotSauce';

const SauceList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0;
  padding: 0;
  justify-content: center;
`;

const Home = (props) => (
  <main>
    <SauceList>
      {props.hotsauces.map((hotsauce) => (
        <HotSauce
          key={hotsauce.id}
          {...hotsauce}
          removeHotSauce={props.removeHotSauce}
        />
      ))}
    </SauceList>
  </main>
);

Home.propTypes = {
  hotsauces: PropTypes.array.isRequired,
  removeHotSauce: PropTypes.func.isRequired
};

export default Home;
