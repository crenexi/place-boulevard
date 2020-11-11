import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from 'components/scenes/Home';
import Commissions from 'components/scenes/Commissions';
import Design from 'components/scenes/Design';
import Sandbox from 'components/scenes/Sandbox';
import './AppMain.scss';

const AppMain = () => {
  const routes = [
    { path: '/commissions', component: Commissions },
    { path: '/design', component: Design },
    { path: '/sandbox', component: Sandbox },
  ];

  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        {routes.map(({ path, component }) => (
          <Route key={path} path={path} component={component} />
        ))}
        <Redirect to="/" />
      </Switch>
    </main>
  );
};

export default AppMain;
