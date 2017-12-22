import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { colors } from '../theme/variables';

const Card = styled.li`
  flex: 1;
  background: rgba(0, 0, 0, 0.8);
  color: ${colors.white};
  margin: 0.5em;
  padding: 1em;
  border-radius: 3px;
  min-width: 250px;
  display: block;
  position: relative;
  transition: all 0.2s ease-in-out;
  transform: scale(1) rotate(0);

  .u-remove {
    position: absolute;
    top: 0.5em;
    right: 0.5em;
    display: none;
    cursor: pointer;
    z-index: 2;
    background: transparent;
    border: none;
    color: red;
    width: 20px;
    height: 20px;

    &:before,
    &:after {
      content: '';
      display: block;
      background: ${colors.red};
      width: 20px;
      height: 3px;
      position: absolute;
      top: 8px;
      left: 0;
    }

    &:before {
      transform: rotate(-45deg);
    }

    &:after {
      transform: rotate(45deg);
    }
  }

  &:hover {
    transform: scale(1.05) rotate(2deg);
    z-index: 10;

    .u-remove {
      display: block;
    }
  }

  a {
    color: ${colors.white};
  }
`;

const Image = styled.img`
  display: block;
  max-height: 200px;
  width: auto;
  margin: 0 auto 1em;
`;

const SauceTitle = styled.h3`
  color: ${colors.yellow};
  text-align: center;
  text-transform: uppercase;
  font-size: 1.5em;
  line-height: 1.1;

  margin-bottom: 0.2em;
`;

const SauceSubTitle = styled.p`
  font-size: 0.9rem;
  margin: 0;
`;

const HotSauce = (props) => (
  <Card>
    <Link to={`/hotsauce/${props.id}`}>
      <Image src={props.imageURL} alt={props.title} />
      <SauceTitle>{props.title}</SauceTitle>
      <SauceSubTitle>{props.subtitle}</SauceSubTitle>
    </Link>
    <button
      className="u-remove"
      onClick={() => props.removeHotSauce(props.id)}
    />
  </Card>
);

HotSauce.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  removeHotSauce: PropTypes.func.isRequired
};

export default HotSauce;
