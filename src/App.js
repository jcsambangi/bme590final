import React, { Component } from 'react';
import './App.css';
import SimpleAppBar from './SimpleAppBar.js'
import DetailedExpansionPanel from './chooseSensorsPanel.js'
import DownloadPanel from './downloadPanel.js'
import LogPanel from './logPanel.js'

class App extends Component {
  render() {
    return (
      <div>
	<SimpleAppBar />
	<DetailedExpansionPanel />
	<DownloadPanel />
	<LogPanel />
      </div>
    );
  }
}

export default App;
