import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import AppRoutes from 'Routes/AppRoutes';
import AuthRoutes from 'Routes/AuthRoutes';
import { Redirect } from 'react-router';
import './App.scss';

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

class App extends Component {
  render() {
    return (
      <React.Suspense fallback={loading()}>
        <Switch>
          {AppRoutes.map((prop, key) => {
            if (prop.redirect)
              return <Redirect from={prop.path} to={prop.to} key={key} />;
            return (
              <AuthRoutes
                path={prop.path}
                component={prop.component}
                key={key}
                private={prop.private}
                name={prop.name}
              />
            );
          })}
        </Switch>
      </React.Suspense>
    );
  }
}

export default withRouter(App);
