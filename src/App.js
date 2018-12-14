import React, { Component } from 'react';
import './App.css';
import SimpleAppBar from './SimpleAppBar.js'
import DownloadBar from './DownloadBar.js'
import LogBar from './LogBar.js'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme.js';
import DownloadCard from './DownloadCard.js'
import LogCard from './LogCard.js'
import axios from 'axios';


class App extends Component {
  constructor() {
	  super();
	  this.state = {
          	pins: [],
          	checked: [],
          	logpins: [],
          	numfiles: [],
          	notes: [],
	  };
  }

  handleToggle = value => () => {
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
