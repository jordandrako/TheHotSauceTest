import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';

import Home from './containers/Home';
import Details from './containers/Details';
import NotFound from './containers/NotFound';

const Router = (props) => (
  <Switch>
    <Route exact path="/" render={() => <Home {...props} />} {...props} />
    <Route
      path="/hotsauce/:hotSauceId"
      render={(obj) => (
        <Details hotsauces={props.hotsauces} match={obj.match} />
      )}
    />
    <Route component={NotFound} />
  </Switch>
);

Router.propTypes = {
  hotsauces: PropTypes.array.isRequired
};

export default withRouter(Router);
