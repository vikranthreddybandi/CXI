import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {FusePageSimple, DemoContent} from '@fuse';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import {FuseAnimate} from '@fuse';
import {Typography, Button,TextField} from '@material-ui/core';
import classNames from 'classnames';
import Box from '@material-ui/core/Box';

const styles = theme => ({
    layoutRoot: {},
    root: {
        flexGrow: 1,
      },
});

class EMailTemplate extends Component {

    render()
    {
        const {classes} = this.props;
        return (
                // <div className="container border-b-8 border-green-darkest ">
                //     <div className="flex items-center">
                //        <Grid container>
                //             <Grid item xs={12}>
                                
                                
                                
 
                //             </Grid>
                //         </Grid>
                //     </div>
                //     </div> 
                
                <div className="container border-b-8 border-green-darkest shadow">
                    

                    
                                <table width="100%" border="0" cellspacing="0" cellpadding="0" className="border-1 border-grey ">
                                    <tr>
                                        <td align="center" valign="top" className="h-160 bg-green-darkest items-center px-20 pt-28">
                                        <img src={('../assets/images/logos/brand_logo.png')} className="w-96 bg-white p-12 mb-12" />
                                        <Typography className="text-white text-24 max-w-320 font-800 leading-tight capitalize ">Starbucks Customer Experience Survey</Typography>
                                        <div className="flex items-center pt-40 pb-24">
                                        <img src={('../assets/images/icons/maps-white.svg')} className="block ml-auto mr-6" />
                                        <Typography className="text-white font-bold text-14 text-center leading-normal mr-auto ">Jubliee hills Rd. 36 </Typography>
                                        </div>
                                        </td>
                                       
                                    </tr>

                                    <tr>
                                    <td align="center" valign="middle" className="pb-32 pt-60 px-16">
                                        <Typography className="text-28 max-w-256 text-green-darkest uppercase w-full font-bold leading-tight text-center mx-auto pb-32">
                                        Thanks you for SIGINING UP
                                        </Typography>
                                        <Typography className="text-18 text-grey-darkest">
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod                                    
                                        </Typography>                                      
                                        

                                    </td>
                                    </tr>

                                    <tr>
                                        <td align="center" valign="middle">
                                        <div className="flex items-center pb-60">
                                            <Typography className="text-grey-darkest text-16 text-center leading-normal ml-auto ">Powerd by </Typography>
                                            <img src={('../assets/images/logos/cxi_solutions.png')} className="block mr-auto" />
                                        </div>
                                        </td>
                                    </tr>

                                </table>
                            
                </div>
                
        )
    }
}

EMailTemplate.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles, {withTheme: true})(EMailTemplate);