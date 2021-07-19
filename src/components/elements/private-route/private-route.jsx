import React from 'react';
import PropTypes from 'prop-types';
import { Route, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuth } from '../../../store/selector';
import { AppRoute } from '../../../const';

export default function PrivateRoute(props) {
  const { exact, path, render } = props;
  const history = useHistory();
  const isAuth = useSelector(getIsAuth);

  return (
    <Route
      exact={exact}
      path={path}
      render={(routeProps) => isAuth ? render(routeProps) : history.push(AppRoute.ROOT)}
    />
  );
}

PrivateRoute.propTypes = {
  render: PropTypes.func.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
};
