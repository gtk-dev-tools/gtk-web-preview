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
          title="Virtual"
          message="Moe Shop - Moe Moe"
          icon='https://i1.sndcdn.com/artworks-000316902936-95dw19-t500x500.jpg'
        />

        <div className="dashtodockContainer bottom">
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
    );
  }
}

export default App;
