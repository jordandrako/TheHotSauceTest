import React, { Component } from 'react';
import styled from 'styled-components';

import Router from './Router';
import Header from './Header';

const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      hotsauces: []
    };
    this.removeHotSauce = this.removeHotSauce.bind(this);
  }

  componentDidMount() {
    const hotsauceEndpoint =
      'https://gist.githubusercontent.com/jordandrako/f997476b9c1e4f7adc0f2d336707d6e4/raw/hotsauces.json';

    const hotsauces = [];

    fetch(hotsauceEndpoint)
      .then((data) => data.json())
      .then((json) => {
        hotsauces.push(...json.list);
        this.setState({ hotsauces });
      });
  }

  removeHotSauce(id) {
    const hotsauces = Array.from(this.state.hotsauces);
    const hotSauceIndex = hotsauces.findIndex((hotsauce) => hotsauce.id === id);

    if (hotSauceIndex > -1) {
      hotsauces.splice(hotSauceIndex, 1);
    }

    this.setState({ hotsauces });
  }

  render() {
    return (
      <Wrapper>
        <Header />
        <Router {...this.state} removeHotSauce={this.removeHotSauce} />
      </Wrapper>
    );
  }
}

App.propTypes = {};

export default App;
