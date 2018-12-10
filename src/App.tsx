import React, { Component } from 'react';
import './App.css';
import Panel from './components/Panel/Panel';
import PanelLeft from './components/Panel/PanelLeft/PanelLeft';
import PanelCenter from './components/Panel/PanelCenter/PanelCenter';
import PanelRight from './components/Panel/PanelRight/PanelRight';
import Notification from './components/Notification/Notification';

import KDEApp from './assets/icons/breeze/apps/48/kdeapp.svg';
import Dock from './components/Dock/Dock';
import Window from './components/Window/Window';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Panel>
          <PanelLeft />
          <PanelCenter />
          <PanelRight />
        </Panel>
        <Notification
          title="Girl in the fire"
          message="Pendulum - Hold your colour"
          icon='https://i.ytimg.com/vi/ZCKpzP5SGYw/hqdefault.jpg'
        />

        <Window title="Hello" subtitle="World" />

        <Dock applications={[
          { placeholder: true, icon: '' }, // This is not a proper representation of the dock but renders fine.
          { placeholder: false, icon: KDEApp }
        ]} />
      </div>
    );
  }
}

export default App;
