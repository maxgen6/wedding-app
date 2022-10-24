import React from 'react';
import { Navigate } from 'react-router-dom';
import { isToken } from '../utils/localStorage';
import {Header} from "../components";

const PrivateRoute = (props) => {
  const { component } = props;
  const isAuth = isToken();

  return <>
    <Header />
    {isAuth ? component : <Navigate to={'/login'} />}
    </>;
};

export default PrivateRoute;