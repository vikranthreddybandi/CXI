import 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Typography, Grid} from '@material-ui/core';


const styles = {
  grid: {
    width: '60%',
  },
//   textField: {
   
//     width: 200,
//   },
};

class ThumbsUpDownMultiple extends React.Component {
  
  render() {
    const { classes } = this.props;
    

    return (
      <div className="">
            
                <Typography className="text-18 text-grey-darkest pb-20">3. What do you like about Starbucks? <span className="text-red-light font-800">*</span></Typography>
                <div className="">
                <Grid container className="pb-24">
                    <Grid item xs={6}>
                        <Typography className="text-grey-darkest text-14 ">Friendly/attentive </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <div className=" ml-32"> 
                            <img src={('../assets/images/icons/thumb-up.png')} className="mr-32"/>
                            <img src={('../assets/images/icons/thumb-down.png')} className="" />
                        </div>
                    </Grid>
                </Grid>

                <Grid container className="">
                    <Grid item xs={6}>
                        <Typography className="text-grey-darkest text-14 ">Personal Treatment </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <div className=" ml-32"> 
                            <img src={('../assets/images/icons/thumb-up.png')} className="mr-32"/>
                            <img src={('../assets/images/icons/thumb-down.png')} className="" />
                        </div>
                    </Grid>
                </Grid>     
                
            </div>
      </div>
    );
  }
}

ThumbsUpDownMultiple.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ThumbsUpDownMultiple);
