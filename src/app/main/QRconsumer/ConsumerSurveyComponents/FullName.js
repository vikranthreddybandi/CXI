import 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const styles = {
  grid: {
    width: '60%',
  },
//   textField: {
   
//     width: 200,
//   },
};

class FullName extends React.Component {
  
  render() {
    const { classes } = this.props;
    

    return (
      <div className="">

        {/* FullNAme question */}
            <div className="">
              <Typography className="text-18 text-grey-darkest pb-20">9. Enter your FullName</Typography>
                <div className="">
                <TextField
                    id="outlined-name"
                    label="FullName"
                    className="w-full"                  
                    variant="outlined"
                    />
                </div>
           </div>
      </div>
    );
  }
}

FullName.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullName);
