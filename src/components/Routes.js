import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Router, Scene } from 'react-native-router-flux';
import Today from './Today';
import Upcoming from './Upcoming';
import Overdue from './Overdue';
import Completed from './Completed';

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="today" component={Today} title="Today" initial />
      <Scene key="upcoming" component={Upcoming} title="Upcoming" />
      <Scene key="overdue" component={Overdue} title="Overdue" />
      <Scene key="completed" component={Completed} title="Completed" />
    </Scene>
  </Router>
);
export default Routes;
