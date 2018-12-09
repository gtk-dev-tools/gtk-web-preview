import React, { Component } from 'react';
import './App.css';
import Panel from './components/Panel/Panel';
import PanelLeft from './components/Panel/PanelLeft/PanelLeft';
import PanelCenter from './components/Panel/PanelCenter/PanelCenter';
import PanelRight from './components/Panel/PanelRight/PanelRight';
import Notification from './components/Notification/Notification';

import KDEApp from './assets/icons/breeze/apps/48/kdeapp.svg';

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

        <div className="hacky-container-for-dock">
          <div id="dashtodockContainer" className="bottom">
            <div id="dash">
              <div className="dash-item-container">
                <div className="placeholder"></div>
              </div>
              <div className="dash-item-container">
                <img src={KDEApp} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
