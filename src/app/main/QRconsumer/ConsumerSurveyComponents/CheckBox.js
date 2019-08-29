import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {Typography, Button, Divider, Icon} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';





const styles = theme => ({
    layoutRoot: {},
    root: {
        flexGrow: 1,
      },
      
      
});



  

class RadioButton extends Component {

    state = {
        
        Cakes: false,
        Ambience: false,
        Free: false,
        Popular: false,
      };
    
   
    
      //   checkbox
      handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
      };
    //   checkbox ends




    render()
    {
        const {classes} = this.props;  
        const { Cakes, Ambience, Free, Popular } = this.state;
        const error = [Cakes, Ambience, Free, Popular].filter(v => v).length !== 3;
        
     
        return (
                <div className="">   

                        {/* checkbox question */}
                        <div className="">
                            <Typography className="text-18 text-grey-darkest pb-20">2. What do you like about Starbucks?</Typography>
                            <div className="">
                            <FormGroup>
                                <FormControlLabel
                                control={
                                    <Checkbox checked={Cakes} onChange={this.handleChange('Cakes')} value="Cakes" />
                                }
                                label="Cakes/pastries"
                                />
                                <FormControlLabel
                                control={
                                    <Checkbox checked={Ambience} onChange={this.handleChange('Ambience')} value="Ambience" />
                                }
                                label="Ambience"
                                />
                                <FormControlLabel
                                control={
                                    <Checkbox
                                    checked={Free}
                                    onChange={this.handleChange('Free')}
                                    value="Free Wi-fi"
                                    />
                                }
                                label="Free Wi-fi"
                                /> 

                                <FormControlLabel
                                control={
                                    <Checkbox
                                    checked={Popular}
                                    onChange={this.handleChange('Popular')}
                                    value="Popular hangout spot"
                                    />
                                }
                                label="Popular hangout spot"
                                />  
                            </FormGroup>
                                
                            </div>
                         </div>
                        {/* checkbox question ends*/}

                </div>
                    
               
               
        )
    }
}

RadioButton.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles, {withTheme: true})(RadioButton);