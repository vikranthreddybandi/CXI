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

class WelcomeSurvey extends Component {

    render()
    {
        const {classes} = this.props;
        return (
            
            <div className="container">
                    <div className="flex items-center border-b-8 border-bottom-green-darkest">
                       <Grid container>
                            <Grid item xs={12}>
                                <div className="px-24 pt-92 pb-40">
                                <Grid item xs={12} className="mx-auto">
                                    <img src={('../assets/images/logos/brand_logo.png')} className="mx-auto block rounded-full max-w-160 mb-48" />
                                    <FuseAnimate animation="transition.slideUpIn" delay={300}>
                                        <Typography className=" sm:text-24 text-20 text-green-darkest uppercase w-full gs-b leading-tight text-center mx-auto pb-24">
                                            Welcome to Starbucks Customer Satisfaction Survey
                                        </Typography>
                                    </FuseAnimate>
                                    <Typography className="text-grey-darkest text-center text-16 leading-normal mx-auto">Hello, we are three ungraduate students from the American University of Dubai and we would really appreciate it if you complete this survey with your honest opinion about Starbucks.</Typography>
                                 </Grid>

                                 <Grid item xs={12} sm={8} className="mx-auto">
                                    <Button variant="contained" className="shadow-none h-48 w-full flex font-600 mx-auto bg-green-darkest hover:bg-green-darkest text-white uppercase cursor-pointer mt-48" aria-label="Register">
                                    START SURVEY
                                    </Button>
                                </Grid>

                                <div className="flex items-center pt-128">
                                            <img src={('../assets/images/icons/map.svg')} className="block ml-auto mr-6" />
                                            <Typography className="text-grey gs-b text-14 text-center leading-normal mr-auto ">Jubliee hills Rd. 36 </Typography>                                        
                                        </div>

                                </div>
                            </Grid>
                        </Grid>
                    </div>
             </div>
            
        )
    }
}

WelcomeSurvey.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles, {withTheme: true})(WelcomeSurvey);