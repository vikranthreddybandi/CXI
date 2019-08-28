import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Typography, Button, Divider, Icon} from '@material-ui/core';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';





const styles = theme => ({
    layoutRoot: {},
    root: {
        flexGrow: 1,
      },
      
      
});



  

class RadioButton extends Component {

    state = {
        value: 'female',
        
      };
    
    //   radio button
      handleDays = event => {
        this.setState({ value: event.target.value });
      };
    //   radio button ends

    


    render()
    {
        const {classes} = this.props;  
       
        
     
        return (
                <div className="container ">    

                        {/* radiobuttn question*/}
                         <div className="">
                            <Typography className="text-18 text-grey-darkest pb-24">1. How often do you visit Starbucks?</Typography>

                            <div className="">
                            <FormControl component="fieldset" className={classes.formControl}>
                              <RadioGroup
                                aria-label="Gender"
                                name="gender1"
                                className={classNames(classes.group, "text-14")}
                                value={this.state.value}
                                onChange={this.handleDays}                                >
                                <FormControlLabel value="daily" control={<Radio />} label="Daily" />
                                <FormControlLabel value="once" control={<Radio />} label="Once a week" />
                                <FormControlLabel value="couple" control={<Radio />} label="Couple times a month" />
                                <FormControlLabel value="never" control={<Radio />} label="Never" />
                                   
                            </RadioGroup>
                            </FormControl>
                                
                            </div>
                         </div>
                        {/* radiobuttn question ends*/}


                  </div>
        )
    }
}

RadioButton.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles, {withTheme: true})(RadioButton);