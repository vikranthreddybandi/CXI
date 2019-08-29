import 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider,  DatePicker } from 'material-ui-pickers';
import {Typography} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const styles = {
  grid: {
    width: '60%',
  },
  textField: {
   
    width: 200,
  },
};

class Calendar extends React.Component {
  state = {
    // The first commit of Material-UI
    selectedDate: new Date('2014-08-18T21:11:54'),
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  render() {
    const { classes } = this.props;
    const { selectedDate } = this.state;

    return (
      <div className="">

        {/* checkbox question */}
            <div className="">
              <Typography className="text-18 text-grey-darkest pb-20">11 . When is your birthday?</Typography>
              <div className="">
                {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container className={classes.grid} justify="space-around">
                    <DatePicker
                      margin="normal"
                      label="Date picker"
                      value={selectedDate}
                      onChange={this.handleDateChange}
                    />                    
                  </Grid>
                </MuiPickersUtilsProvider> */}

                <TextField
                  id="date"
                  label="Birthday"
                  type="date"
                  defaultValue="2017-05-24"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                </div>
           </div>
      </div>
    );
  }
}

Calendar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Calendar);
