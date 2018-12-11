import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '40%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
      alignItems: 'center',
  },
  table: {
    minWidth: 200,
      alignItems: 'center',
  },
});

let id = 0;
function createData(pin, nmfiles) {
  id += 1;
  return { id, pin, nmfiles };
}

//const rows = [createData('4021', 20), createData('4756', 12), createData('7033', 45)]


function LogTable(props) {
  const { classes } = props;

  var i;
  var rows = [];
  for (i = 0; i < props.logpins.length; i++) {
    rows.push([createData(props.logpins[i], props.numfiles[i])]);
}

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>DASHR Pin Number</TableCell>
            <TableCell numeric>Number of Files Downloaded</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow>
                <TableCell>{row.pin}</TableCell>
                <TableCell numeric>{row.nmfiles}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

LogTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LogTable);