import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

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

class DownloadList extends React.Component {

  render() {
    const { classes } = this.props;


    return (
      <List dense className={classes.root}>
          <Typography className={classes.title}>
              Detected DASHRs:
          </Typography>
          {//this.props.pins.map(value => (
          }
            {[10, 19, 24, 3].map(value => (
          <ListItem key={value} button>
            <ListItemText primary={`Pin: ${value}`} />
            <ListItemSecondaryAction>
              <Checkbox
                onChange={this.props.handleToggle(value)}
                checked={this.props.checked.indexOf(value) !== -1}
              />
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