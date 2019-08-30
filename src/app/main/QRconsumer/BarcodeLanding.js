import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {FusePageSimple, DemoContent} from '@fuse';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import {FuseAnimate} from '@fuse';
import {Typography, Button} from '@material-ui/core';


const styles = theme => ({
    layoutRoot: {},
    root: {
        flexGrow: 1,
      },
});

class BarcodeLanding extends Component {

    render()
    {
        const {classes} = this.props;
        return (
            
            <div className="container border-b-8 border-bottom-green-darkest">
                    <div className="flex items-center ">
                       <Grid container>
                            <Grid item xs={12}>
                                <div className="px-24 pt-160">
                                <Grid item xs={12} className="mx-auto">
                                    <img src={('../assets/images/logos/brand_logo.png')} className="mx-auto block rounded-full max-w-160 mb-48" />
                                    <FuseAnimate animation="transition.slideUpIn" delay={300}>
                                        <Typography className=" sm:text-24 text-20 text-green-darkest uppercase w-full font-bold leading-tight text-center mx-auto pb-24">
                                            Do you have 2 mins? we would like to improve our customer service
                                        </Typography>
                                    </FuseAnimate>
                                    <Typography className="text-grey-darkest text-center text-16 leading-normal mx-auto">We value your candidate feedback and appreciate if you can take time to complete our quik survey</Typography>
                                 </Grid>

                                 <Grid item xs={12} className="mx-auto py-32">
                                    <Typography className="text-grey text-center text-12 mx-auto">Scan the code to open the link</Typography>
                                    <img src={('../assets/images/logos/scanner.png')} className="mx-auto block" />
                                </Grid>
                                
                                <Grid item xs={12}>                                   
                                        <div className="flex justify-between mb-12">
                                            <div className="inline-flex items-center">
                                                <img src={('../assets/images/icons/map.svg')} className="block mr-6" />
                                                <Typography className="text-grey font-500 sm:text-12 text-10">Jubliee hills Rd. 36 </Typography> 
                                            </div>
                                            <div className="inline-flex items-center">
                                                <Typography className="text-grey sm:text-12 text-10 font-500">Powerd by </Typography>
                                                <img src={('../assets/images/logos/cxi_solutions.png')} className="block sm:max-w-128 max-w-96" />
                                            </div>
                                        </div>

                                </Grid>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
             </div>
            
        )
    }
}

BarcodeLanding.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles, {withTheme: true})(BarcodeLanding);