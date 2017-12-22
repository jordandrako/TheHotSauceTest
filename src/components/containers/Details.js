import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
`;

const Col = styled.div``;

const Details = (props) => {
  const hotSauceId = parseInt(props.match.params.hotSauceId);
  const hotSauceIndex = props.hotsauces.findIndex(
    (hotsauce) => hotsauce.id === hotSauceId
  );

  const hotSauce = props.hotsauces.length > 0 && props.hotsauces[hotSauceIndex];

  console.log(hotSauce);

  return (
    <main>
      <Link to="/">Go Back Hot Sauce List</Link>
      <Row>
        <Col>
          <h2>{hotSauce.title}</h2>
          <img src={hotSauce.imageURL} alt={hotSauce.title} />
        </Col>
        <Col>
          <p>{hotSauce.description}</p>
        </Col>
      </Row>
    </main>
  );
};

Details.propTypes = {
  hotsauces: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired
};

export default Details;
