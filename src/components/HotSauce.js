import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { colors, theme } from '../theme/variables';

const Card = styled.li`
  background: ${colors.white};
  color: ${colors.black};
  margin: 0.5em;
  padding: 0.5em;
  width: calc(25% - 1em);
  min-width: 200px;
  display: block;
  position: relative;

  .u-remove {
    position: absolute;
    top: 0.5em;
    right: 0.5em;
    display: none;
    cursor: pointer;
    z-index: 2;
  }

  &:hover {
    .u-remove {
      display: block;
    }
  }

  a {
    color: ${colors.black};
  }
`;

const Image = styled.img`
  display: block;
  max-height: 200px;
  width: auto;
  margin: 0 auto;
`;

const HotSauce = (props) => (
  <Card>
    <Link to={`/hotsauce/${props.id}`}>
      <Image src={props.imageURL} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.subtitle}</p>
    </Link>
    <button className="u-remove" onClick={() => props.removeHotSauce(props.id)}>
      X
    </button>
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
