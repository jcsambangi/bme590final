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
import axios from 'axios';
//var usb = require('usb')

class App extends Component {
  constructor() {
	  super();
	  this.state = {
		  allFiles: {},
		  chipData: [],
		  counter: 0,
          pins: [],
          checked: [],
          logpins: [],
          numfiles: [],
          notes: [],
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

  handleToggle = value => () => {
    //const { chk } = this.state.checked;
    const currentIndex = this.state.checked.indexOf(value);
    const newChecked = [...this.state.checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });

    console.log(this.state.checked)
    }

  getPin = () => {
    axios.get('http://localhost:5000/api/dashr/find_pins').then( (res) => {
      console.log(res.data);
      console.log(res.data.pins);
      this.setState({pins: res.data.pins});
      });
  }

  sendPins = () => {
      axios.post('http://localhost:5000/api/dashr/upload', this.state.checked).then(  (lg) => {
          console.log(lg.data);
          console.log(lg.data.logpins);
          console.log(lg.data.numfiles);
          this.setState({logpins: lg.data.logpins});
          this.setState({numfiles: lg.data.numfiles});
          this.setState({notes: lg.data.notes});
      })
  };

  render() {
    return (
        <MuiThemeProvider theme={theme}>
      <div>
	<SimpleAppBar />
          {//<ChooseSensorsPanel addDir={this.addDir} chipData={this.state.chipData} handleDelete={this.handleDelete} />
          }
          <DownloadBar />
          <DownloadCard getPin={this.getPin} pins={this.state.pins} sendPins={this.sendPins} logpins={this.state.logpins} numfiles={this.state.numfiles} handleToggle={this.handleToggle} checked={this.state.checked}/>
          {
             // (this.state.pins.length > 0) ? this.state.pins[0] : "No DASHRs Detected"
          }
	<LogBar />
          <LogCard logpins={this.state.logpins} numfiles={this.state.numfiles} notes={this.state.notes} />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
