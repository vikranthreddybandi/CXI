import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import {Typography, Input} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class Dropdown extends React.Component {
  state = {
    age: '',
    name: 'hai',
    labelWidth: 0,
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (


        <div className="container">
                <div className="">
                <Typography className="text-18 text-grey-darkest pb-24">4. I rate the quality of Starbucks compared to other brands to be ?</Typography>
                    <form className={classes.root} autoComplete="off">  

                        <FormControl className="w-full">                                
                            <Select
                                value={this.state.age}
                                onChange={this.handleChange}
                                input={
                                    <OutlinedInput
                                        labelWidth={this.state.labelWidth}
                                        name="age"
                                        id="outlined-age-simple"
                                    />
                                    }
                                displayEmpty
                                name="age"
                                className={classes.selectEmpty}
                            >
                                <MenuItem value="">
                                <em>Very Bad</em>
                                </MenuItem>
                                <MenuItem value={10}>Bad</MenuItem>
                                <MenuItem value={20}>Average</MenuItem>
                                <MenuItem value={30}>Good</MenuItem>
                                <MenuItem value={40}>Excellent</MenuItem>
                            </Select>
                                
                    </FormControl>
 
                     </form>
                </div>

        </div>
    
    );
  }
}

Dropdown.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dropdown);
