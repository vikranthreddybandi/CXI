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

class SignIn extends Component {

    render()
    {
        const {classes} = this.props;
        return (
                
            <div className="container border-b-8 border-green-darkest">
                    <div className="flex items-center ">
                       <Grid container>
                            <Grid item xs={12}>
                                <div className="px-24 sm:pt-128 pt-92 pb-16">
                                    <Grid item xs={12} className="mx-auto">
                                        <img src={('../assets/images/logos/brand_logo.png')} className="mx-auto block rounded-full max-w-160 mb-36" />
                                        <FuseAnimate animation="transition.slideUpIn" delay={300}>
                                            <Typography className=" sm:text-24 text-20 text-green-darkest uppercase w-full my-16 font-bold leading-tight text-center mx-auto pb-18">
                                                Welcome to Starbucks Customer Satisfaction Survey
                                            </Typography>
                                        </FuseAnimate>
                                        <Typography className="text-grey-darkest text-center text-16 leading-normal mx-auto mb-36">Please enter your details or you can start your survey by signing in as guest.</Typography>
                                    </Grid>

                                    {/* signIn form */}
                                    


                                    <Grid item xs={12} sm={10} className="mx-auto">
                                    <TextField
                                              className="mb-16"
                                              label=" Email"
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
                                              label="Password"
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
                                                Sign Ip
                                            </Button>
                                        </Grid>

                                        <Grid item xs={12} sm={10} className="mx-auto">
                                            {/* already have account */}
                                            
                                             <div>
                                                 <Typography className="text-center text-grey-darkest font-bold mt-20">Dont Have a account? <span className="text-green-darkest capitalize">Sign up now</span></Typography>
                                             </div>
                                            
                                            {/* already have account ends */}
                                        </Grid>

                                        <div className="flex items-center pt-128">
                                            <img src={('../assets/images/icons/map.svg')} className="block ml-auto mr-6" />
                                            <Typography className="text-grey font-500 text-14 text-center leading-normal mr-auto ">Jubliee hills Rd. 36 </Typography>                                        
                                        </div>
                                {/* signIn form ends*/}

                                </div>
                            </Grid>
                        </Grid>
                    </div>
            </div>
            
        )
    }
}

SignIn.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles, {withTheme: true})(SignIn);