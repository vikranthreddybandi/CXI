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
  textField: {
   
    width: 200,
  },
};

class Email extends React.Component {
  
  render() {
    const { classes } = this.props;
    

    return (
      <div className="container">

        {/* Email question */}
            <div className="">
              <Typography className="text-18 text-grey-darkest pb-24">9. Please share your email ID with us to get offer notifications</Typography>
                <div className="">
                <TextField
                    id="outlined-name"
                    label="Email Id"
                    className="w-full"                  
                    variant="outlined"
                    />
                </div>
           </div>
      </div>
    );
  }
}

Email.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Email);
