import React from 'react';

import Chat from './routes/Chat';
import Camera from './routes/Camera';
import Stories from './routes/Stories';
import Me from './routes/Me';

import Menu from './components/Menu';

const SubMenu = () => (
  <Menu
    routes={[
      { component: Me },
      { component: Camera }
    ]}
    initialIndex={1}
    horizontal={false}
  />
);

const App = () => {
  return (
    <Menu
      routes={[
        { component: Chat },
        { component: SubMenu },
        { component: Stories },
      ]}
      initialIndex={1}
    />
  );
};

export default App;
