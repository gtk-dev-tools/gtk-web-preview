import React, { Component } from 'react';
import './App.css';
import Panel from './components/Panel/Panel';
import PanelLeft from './components/Panel/PanelLeft/PanelLeft';
import PanelCenter from './components/Panel/PanelCenter/PanelCenter';
import PanelRight from './components/Panel/PanelRight/PanelRight';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Panel>
          <PanelLeft />
          <PanelCenter />
          <PanelRight />
        </Panel>
      </div>
    );
  }
}

export default App;
