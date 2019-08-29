import React from 'react';
import {AppBar, Hidden, MuiThemeProvider, Toolbar, withStyles, Typography, Icon} from '@material-ui/core';
import {FuseSearch} from '@fuse';
import connect from 'react-redux/es/connect/connect';
import {withRouter} from 'react-router-dom';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import NavbarMobileToggleButton from 'app/fuse-layouts/shared-components/NavbarMobileToggleButton';
// import QuickPanelToggleButton from 'app/fuse-layouts/shared-components/quickPanel/QuickPanelToggleButton';
import Logo from 'app/fuse-layouts/shared-components/Logo';

const styles = theme => ({
    separator: {
        width          : 1,
        height         : 64,
        backgroundColor: theme.palette.divider
    }
});

const ToolbarLayout3 = ({classes, settings, toolbarTheme}) => {

    const layoutConfig = settings.layout.config;

    return (
        <MuiThemeProvider theme={toolbarTheme}>
            <AppBar id="fuse-toolbar" className="flex relative z-10" color="default">
                <Toolbar className="container p-0 lg:px-24">

                    {/* {layoutConfig.navbar.display && (
                        <Hidden lgUp>
                            <NavbarMobileToggleButton className="w-64 h-64 p-0"/>
                            <div className={classes.separator}/>
                        </Hidden>
                    )} */}

                    <Hidden mdDown>
                        <div className={classNames("flex flex-no-shrink items-center")}>
                            <Logo/>
                        </div>
                    </Hidden>

                    <div className="flex">
                        {/* <Hidden xsDown>
                            <FuseSearch className="mx-16 lg:mx-24" variant="basic"/>
                        </Hidden> */}
                        <Button variant="outlined" size="large" color="secondary" className="rounded-6 text-black capitalize text-14 mx-16 lg:mx-24">
                            Order Now
                        </Button>
                    </div>

                    <div className="Capitalize">
                        {/* <Hidden xsDown>
                            <FuseSearch className="mx-16 lg:mx-24" variant="basic"/>
                        </Hidden> */}
                        <Typography className="text-black gs-m">To</Typography>
                    </div>

                    <div className="flex">
                        <FuseSearch className="mx-16 lg:mx-24" color="secondary" variant="basic"/>
                    </div>

                    <div className="flex px-12 ml-auto">
                        <Hidden xsDown>
                            <FuseSearch/>
                        </Hidden>
                    </div>
                    

                    <div className="flex px-12">

                        {/* <HeaderSearch/> */}
                        <Icon className={classes.icon} color="action">
                            shopping_cart
                        </Icon>

                    </div>

                </Toolbar>
            </AppBar>
        </MuiThemeProvider>
    );
};

function mapStateToProps({fuse})
{
    return {
        settings    : fuse.settings.current,
        toolbarTheme: fuse.settings.toolbarTheme
    }
}

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps)(ToolbarLayout3)));
