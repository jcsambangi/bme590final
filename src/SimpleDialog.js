import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';
import axios from 'axios';

const styles = {
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
};

class SimpleDialog extends React.Component {

  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onClose(value);
  };

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;
    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">Select files to download for {this.props.label}.</DialogTitle>
        <div>
          <List>
            {this.props.dates.map(date => (
              <ListItem key={date} >
                    <Checkbox 
		    	onChange={this.props.handleToggleDate(date[0])}
	                checked={this.props.checkedDate.indexOf(date[0]) !== -1}
		    />
		    <ListItemText primary={date[0]} />
		    <ListItemText secondary={date[1]} />
              </ListItem>
            ))}
          </List>
	   <Button variant="contained" color="secondary" className={classes.button} onClick={this.props.sendDates(this.props.label)}>
        	Harvest selected files
      	   </Button>
        </div>
      </Dialog>
    );
  }
}

SimpleDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

const SimpleDialogWrapped = withStyles(styles)(SimpleDialog);

class SimpleDialogDemo extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = value => {
    this.setState({ selectedValue: value, open: false });
  };

  render() {
   const{ classes } = this.props;
    return (
      <div>
        <Button variant="outlined" color="primary" label={this.props.label} initCounts={this.props.initCounts} onClick={this.handleClickOpen}>
          Detailed Download
        </Button>
        <SimpleDialogWrapped
	  label={this.props.label}
	  dates={this.props.dates}
          selectedValue={this.state.selectedValue}
          open={this.state.open}
          onClose={this.handleClose}
	  sendDates={this.props.sendDates}
	  checkedDate={this.props.checkedDate}
	  handleToggleDate={this.props.handleToggleDate}
        />
      </div>
    );
  }
}

export default SimpleDialogDemo;
