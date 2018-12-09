import React, { Component } from 'react';
import './App.css';
import SimpleAppBar from './SimpleAppBar.js'
import ChooseSensorsPanel from './chooseSensorsPanel.js'
import DownloadBar from './DownloadBar.js'
import LogBar from './LogBar.js'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme.js';
import DownloadCard from './DownloadCard.js'
import LogCard from './LogCard.js'
//var usb = require('usb')

class App extends Component {
  constructor() {
	  super();
	  this.state = {
		  allFiles: {},
		  chipData: [],
		  counter: 0,
	  };
	  this.addDir = this.addDir.bind(this);
	  this.handleDelete = this.handleDelete.bind(this);
  }
  addDir = (event) => {
        var newDirName = event.target.files[0].webkitRelativePath.split("/", 1)[0];
        let newFiles = Object.assign({}, this.state.allFiles);
        newFiles[newDirName] = event.target.files;
	let newChip = { key: this.state.counter, label: newDirName };
	var newChipData = [];
	newChipData.push.apply(newChipData, this.state.chipData)
	newChipData.push(newChip);
        this.setState({allFiles: newFiles, chipData: newChipData, counter: this.state.counter + 1});
	console.log(this.state);
  }
  handleDelete = data => () => {
    this.setState(state => {
      const chipData = [...state.chipData];
      const chipToDelete = chipData.indexOf(data);
      const allFiles = {...state.allFiles};
      let dirName = chipData[chipToDelete].label;
      chipData.splice(chipToDelete, 1);
      delete allFiles[dirName];
      return { chipData, allFiles };
    });
    console.log(this.state);
  };
  render() {
    return (
        <MuiThemeProvider theme={theme}>
      <div>
	<SimpleAppBar />
          {//<ChooseSensorsPanel addDir={this.addDir} chipData={this.state.chipData} handleDelete={this.handleDelete} />
          }
          <DownloadBar />
          <DownloadCard />
	<LogBar />
          <LogCard />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
