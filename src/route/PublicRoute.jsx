import React from 'react';
import { Navigate } from 'react-router-dom';
import { isToken } from '../utils/localStorage';

const PublicRoute = (props) => {
  const { component } = props;
  const isAuth = isToken();

  return <>{!isAuth ? component : <Navigate to={'/invited'} />}</>;
};

export default PublicRoute;