import React from 'react';
import {AppBar, MuiThemeProvider, Toolbar, Typography, Hidden} from '@material-ui/core';
import connect from 'react-redux/es/connect/connect';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';



const FooterLayout3 = ({classes, footerTheme}) => {
    return (
        <MuiThemeProvider theme={footerTheme}>
            <AppBar id="fuse-footer" className="relative z-10" color="default">
                
            </AppBar>
        </MuiThemeProvider>
    );
};

function mapStateToProps({fuse})
{
    return {
        footerTheme: fuse.settings.footerTheme
    }
}

export default connect(mapStateToProps)(FooterLayout3);
