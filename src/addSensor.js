import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';


class AddSensor extends Component {
  render () {
  return (
    <div>
      <Fab
        component="label"
        color="primary"
        className="Fab"
      >
      <AddIcon />
      <input style={{ display: 'none' }} type="file" webkitdirectory="true" onChange={this.props.addDir} multiple />
      </Fab>
    </div>
  );
  }	
}

export default AddSensor;
