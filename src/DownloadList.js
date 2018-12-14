import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import SimpleDialogDemo from './SimpleDialog.js'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
    title: {
        fontSize: 14,
        textDecoration: 'underline'
    }
});
var forNow;

class DownloadList extends React.Component {
  render() {
    const { classes } = this.props;
    console.log(this.props.initCounts)
    return (
      <List dense className={classes.root}>
          <Typography className={classes.title}>
              Detected DASHRs:
          </Typography>
          {this.props.pins.map(value => (
          <ListItem key={value} >
		<Checkbox
		  onChange={this.props.handleToggle(value)}
                  checked={this.props.checked.indexOf(value) !== -1}
		  />
	 {forNow = value}
		  {//<ListItemText primary={`Pin: ${value}`} />
		  }
            <ListItemSecondaryAction>
		  <SimpleDialogDemo handleToggleDate={this.props.handleToggleDate} sendDates={this.props.sendDates} checkedDate={this.props.checkedDate} label={value} dates={this.props.dates[forNow]} />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    );
  }
}

DownloadList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DownloadList);
