import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {FusePageSimple, DemoContent} from '@fuse';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import {FuseAnimate} from '@fuse';
import {Typography, Button,TextField} from '@material-ui/core';

const styles = theme => ({
    layoutRoot: {},
    root: {
        flexGrow: 1,
      },
});

class ThankYou extends Component {

    render()
    {
        const {classes} = this.props;
        return (
                // <div className="container ">
                //     <div className="flex items-center border-b-8 border-bottom-green-darkest ">
                //        <Grid container>
                //             <Grid item xs={12}>
                                
                //                 <div className="px-24 pt-92">
                //                     <img src={('../assets/images/logos/happiness.svg')} className="mx-auto block rounded-full max-w-160 mb-48" /> 
                //                     <FuseAnimate animation="transition.slideUpIn" delay={300}>
                //                         <Typography className="text-24 text-green-darkest uppercase w-full font-bold leading-tight text-center mx-auto pb-8">
                //                             Thank you!
                //                         </Typography>
                //                     </FuseAnimate> 
                                    
                //                     <Typography className="text-grey-darkest text-center text-18 leading-normal mx-auto pb-8">Your response has been submitted</Typography>
                                   
                //                     {/* <Typography className="text-grey-darkest text-center text-20 leading-normal mx-auto font-bold">Would you like to <span className="text-green-darkest font-bold cursor-pointer">Sign up ?</span></Typography> */}
                                   
                //                     <div className="flex items-center pt-256 pb-24 sm:pt-128">
                //                         <Typography className="text-grey-darkest text-16 text-center leading-normal ml-auto ">Powerd by </Typography>
                //                         <img src={('../assets/images/logos/cxi_solutions.png')} className="block mr-auto" />
                //                     </div>

                //                     </div>     
                //             </Grid>
                //         </Grid>
                //     </div>
                //     </div>  
              

                <div className="container">
                    <div className=" border-b-8 border-bottom-green-darkest">
                    <div className="h-screen grid items-center ">                        

                         <div className="items-center">
                            <img src={('../assets/images/logos/happiness.svg')} className="mx-auto block rounded-full max-w-160 mb-48" /> 
                            <FuseAnimate animation="transition.slideUpIn" delay={300}>
                                <Typography className="text-40 text-green-darkest uppercase w-full gs-b leading-tight text-center mx-auto pb-8">
                                    Thank you!
                                </Typography>
                            </FuseAnimate>                             
                            <Typography className="text-grey-darkest text-center text-18 leading-normal mx-auto pb-8">Your response has been submitted</Typography>                            
                           
                         </div>

                         <div className=" items-end">
                             <div className="flex items-center">
                                <Typography className="text-grey-darkest text-16 text-center leading-normal ml-auto ">Powerd by </Typography>
                                <img src={('../assets/images/logos/cxi_solutions.png')} className="block mr-auto" />
                            </div>
                         </div>
                    </div>
                </div>
                </div>
        )
    }   
}

ThankYou.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles, {withTheme: true})(ThankYou);