import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Col = styled.div`
  flex: 1;
  min-width: 300px;
  padding: 1.5em;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  word-wrap: break-word;

  &:last-child {
    background: #111;
  }
`;

const Title = styled.h2`
  text-transform: uppercase;
  margin: 0 0 1em;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
`;

const Description = styled.p`
  font-size: 1.1rem;
`;

const GoBack = styled(Link)`
  margin-top: auto;
  text-align: right;
`;

const Details = (props) => {
  const hotSauceId = parseInt(props.match.params.hotSauceId);
  const hotSauceIndex = props.hotsauces.findIndex(
    (hotsauce) => hotsauce.id === hotSauceId
  );

  const hotSauce = props.hotsauces.length > 0 && props.hotsauces[hotSauceIndex];

  console.log(hotSauce);

  return (
    <main>
      <Row>
        <Col>
          <Title>{hotSauce.title}</Title>
          <Image src={hotSauce.imageURL} alt={hotSauce.title} />
        </Col>
        <Col>
          <Description>{hotSauce.description}</Description>
          <GoBack to="/">&#11013; Go Back To Hot Sauce List</GoBack>
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
