import React from 'react';
import { Redirect, Route } from 'react-router';
import { getUser } from '../firebase/tools/getUser';
import Header from '../components/Header';

const PrivateLayoutClient = (props) => {
  return (
    <>
      {/* <Header /> */}
      {props.children}
    </>
  );
};

const PrivateRoutesIndex = ({ component: Component, path, exact }) => {
  const { res: authed } = getUser();
  return (
    <PrivateLayoutClient>
      <Route
        render={(path, exact) =>
          authed ? <Component exact={exact} path={path} /> : <Redirect to="/" />
        }
      />
    </PrivateLayoutClient>
  );
};

export default PrivateRoutesIndex;
