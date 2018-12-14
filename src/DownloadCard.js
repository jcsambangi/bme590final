import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DownloadList from './DownloadList.js';
import FilesButton from './FilesButton';
import axios from 'axios';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};



function DownloadCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;


  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Click the button to detect all connected DASHR devices
        </Typography>
      </CardContent>
      <CardActions>
          <Button variant="contained" color="secondary" className={classes.button} onClick={props.getPin}>Detect DASHRs</Button>
      </CardActions>
        <CardContent>
        <DownloadList handleToggleDate={props.handleToggleDate} sendDates={props.sendDates} checkedDate={props.checkedDate} getPin={props.getPin} pins={props.pins} dates={props.dates} sendPins={props.sendPins} handleToggle={props.handleToggle} checked={props.checked}/>
          <FilesButton sendPins={props.sendPins}/>
        </CardContent>
    </Card>
  );
}

DownloadCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DownloadCard);
