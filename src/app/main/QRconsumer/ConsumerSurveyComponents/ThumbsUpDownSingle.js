import 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Typography, Grid} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const styles = {
  grid: {
    width: '60%',
  },
//   textField: {
   
//     width: 200,
//   },
};

class ThumbsUpDownSingle extends React.Component {
  
  render() {
    const { classes } = this.props;
    

    return (
      <div className="">
            
            <Typography className="text-18 text-grey-darkest pb-20">3. I think the quality of the products is worth the prices. <span className="text-red-light font-800">*</span></Typography>
                <div className="">
                <Grid container className="">
                    <Grid item xs={4}>
                        <div className="">
                            <img src={('../assets/images/icons/thumb-up.png')}/>
                            <Typography className="text-grey-darkest text-12">Agree</Typography>
                        </div>
                      </Grid>
                      <Grid item xs={4}>
                        <div className="">
                            <img src={('../assets/images/icons/thumb-down.png')} className="" />
                            <Typography className="text-grey-darkest text-12">Disagree</Typography>
                        </div>
                    </Grid>   
                </Grid>

                  
                
            </div>
      </div>
    );
  }
}

ThumbsUpDownSingle.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ThumbsUpDownSingle);
