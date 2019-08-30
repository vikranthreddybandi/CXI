import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {FusePageSimple, DemoContent} from '@fuse';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import {FuseAnimate} from '@fuse';
import {Typography, Button, TextField, Icon, } from '@material-ui/core';


const styles = theme => ({
    layoutRoot: {},
    root: {
        flexGrow: 1,
      },
});

class SignUp extends React.Component {

    render()
    {
        const {classes} = this.props;
        return (
                
            <div className="container border-b-8 border-bottom-green-darkest">
                    <div className="flex items-center ">
                       <Grid container>
                            <Grid item xs={12}>
                                <div className="px-24 py-52">
                                    <Grid item xs={12} className="mx-auto">
                                        <img src={('../assets/images/logos/brand_logo.png')} className="mx-auto block rounded-full max-w-160 mb-36" />
                                        <FuseAnimate animation="transition.slideUpIn" delay={300}>
                                            <Typography className=" sm:text-24 text-20 text-green-darkest uppercase w-full my-16 font-bold leading-tight text-center mx-auto pb-18">
                                                Welcome to Starbucks Customer Satisfaction Survey
                                            </Typography>
                                        </FuseAnimate>
                                        <Typography className="text-grey-darkest text-center text-16 leading-normal mx-auto mb-36">Please enter your details or you can start your survey by signing in as guest.</Typography>
                                    </Grid>

                                    {/* signup form */}
                                    <Grid item xs={12} sm={10} className="mx-auto">
                                    <TextField
                                              className="mb-16"
                                              label="Enter your Full Name"
                                              autoFocus
                                              type="name"
                                              name="name"                                             
                                              onChange={this.handleChange}
                                              variant="outlined"
                                              required
                                              fullWidth
                                          />
                                    </Grid>


                                    <Grid item xs={12} sm={10} className="mx-auto">
                                    <TextField
                                              className="mb-16"
                                              label=" Email Id"
                                              type="email" 
                                              name="email"
                                              onChange={this.handleChange}
                                              variant="outlined"
                                              required
                                              fullWidth
                                          />
                                    </Grid>

                                    <Grid item xs={12} sm={10} className="mx-auto">
                                      <TextField
                                              className="mb-16"
                                              label=" Phone Number"
                                              autoFocus
                                              type="number"
                                              name="number"
                                              onChange={this.handleChange}
                                              variant="outlined"
                                              required
                                              fullWidth
                                          />
                                          </Grid>
        
                                          <Grid item xs={12} sm={10} className="mx-auto">
                                          <TextField
                                              className="mb-16"
                                              label="Enter Password"
                                              type="Password" 
                                              name="Password"
                                              onChange={this.handleChange}
                                              variant="outlined"
                                              required
                                              fullWidth
                                          />
                                        </Grid>

                                        <Grid item xs={12} sm={10} className="mx-auto">
                                            <Button variant="contained" className="shadow-none h-48 w-full mx-auto bg-green-darkest text-white hover:bg-green-darkest text-captalize">
                                                Sign Up
                                            </Button>
                                        </Grid>

                                        <Grid item xs={12} sm={10} className="mx-auto">
                                            {/* location */}
                                            
                                          
                                            
                                            {/* location ends */}
                                        </Grid>

                                        <div className="flex items-center pt-28">
                                            <img src={('../assets/images/icons/map.svg')} className="block ml-auto mr-8" />
                                            <Typography className="text-grey font-500 text-16 text-center leading-normal mr-auto ">Jubliee hills Rd. 36 </Typography>                                        
                                        </div>
                                {/* signup form ends*/}

                                </div>
                            </Grid>
                        </Grid>
                    </div>
            </div>
            
        )
    }
}

SignUp.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles, {withTheme: true})(SignUp);