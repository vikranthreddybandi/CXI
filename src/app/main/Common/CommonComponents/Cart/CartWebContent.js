import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography, IconButton, Icon, Button, TextField } from '@material-ui/core';
import classNames from 'classnames' ;
import InputBase from '@material-ui/core/InputBase';


const styles = theme => ({
    root: {
        flexGrow: 1,
      },
      search: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
      },
      input: {
        marginLeft: 8,
        flex: 1,
      },
      iconButton: {
        padding: 10,
      },
      divider: {
        width: 1,
        height: 28,
        margin: 4,
      },
});

function CartWebContent(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
        <Grid container spacing={24} className="flex items-center">
            <Grid item xs={4}>
                <Typography className="gs-b text-28 capitalize text-black-dark">
                    Cart
                </Typography>
            </Grid>
            <Grid item xs={8} className="ml-auto text-right">
                <Typography className="flex items-center float-right">
                    <span className="text-12 text-grey-lighter"> 0 Items Added </span>
                    <span className="text-24 uppercase text-grey-lighter ml-12 cursor-pointer"
                    onClick={props.closeDrawer}
                    >
                        {/* <IconButton aria-label="Add">
                            <Icon className={classNames(classes.icon, "text-grey-dark")} fontSize="large">
                                close
                            </Icon>
                        </IconButton> */}
                        X
                    </span>
                </Typography>
            </Grid>
        </Grid>

        <Grid container spacing={24} className="flex items-center py-28">

            {/* Cart Empty State */}
                {/* <Grid item xs={12}>

                    <Typography className="text-center block m-0-auto">
                        <img src={('../../../../assets/images/cart/empty_cart.svg')} />
                    </Typography>

                    <Typography className="w-3/4 text-center text-grey-darker block m-0-auto">
                        Good home food is always cooking! Go ahead and order some yummy home food from the menu.
                    </Typography>
                    
                </Grid> */}
            {/* Cart Empty State end */}


            {/* Cart added Item */}
                <Grid item xs={12} className="pb-12">
                    <div className="h-160 overflow-auto pr-12">
                        
                        <div className="clearfix">
                            <div className="float-left text-left mb-24 w-1/2">
                                {/* Food Item Name */}
                                    <img src="assets/images/icons/non-veg.png" className="float-left"/>
                                    <p component="h6" variant="h6" className="text-black-dark leading-tight pb-4 capitalize text-14 flex pl-6">
                                        Sambar Rice with Aloo Fry & Mutton Curry
                                    </p>
                                {/* Food Item Name end */}
                            </div>

                            <div className="float-right text-right flex items-center">
                                {/* Added Button Cart */}
                                    <p className="float-right text-right pr-12">
                                        <Button variant="outlined" className="hover:bg-red hover:text-white rounded-none text-black-dark uppercase py-2 px-8 border-grey-lighter">
                                            {/* <Icon className={classNames(" gs-m text-2")}>
                                                add
                                            </Icon> */}
                                            
                                            <span className="text-14 gs-m"> - </span>

                                            <span className="px-10 text-10 gs-m"> 2 </span>

                                            <span className="text-14 gs-m"> + </span>

                                            {/* <Icon className={classNames(" gs-m text-2")}>
                                                minimize    
                                            </Icon> */}
                                        </Button>
                                    </p>
                                {/* Added Button Cart end */}

                                {/* Food Item Price */}
                                    <p className="float-left text-left text-black text-14">
                                        &#x20b9; 170
                                    </p>
                                {/* Food Item Price end */}
                            </div>
                        </div>
                        
                        <div className="clearfix">
                            <div className="float-left text-left mb-24 w-1/2">
                                {/* Food Item Name */}
                                    <img src="assets/images/icons/non-veg.png" className="float-left"/>
                                    <p component="h6" variant="h6" className="text-black-dark leading-tight pb-4 capitalize text-14 flex pl-6">
                                        Sambar Rice with Aloo Fry & Mutton Curry
                                    </p>
                                {/* Food Item Name end */}
                            </div>

                            <div className="float-right text-right flex items-center">
                                {/* Added Button Cart */}
                                    <p className="float-right text-right pr-12">
                                        <Button variant="outlined" className="hover:bg-red hover:text-white rounded-none text-black-dark uppercase py-2 px-8 border-grey-lighter">
                                            {/* <Icon className={classNames(" gs-m text-2")}>
                                                add
                                            </Icon> */}
                                            
                                            <span className="text-14 gs-m"> - </span>

                                            <span className="px-10 text-10 gs-m"> 2 </span>

                                            <span className="text-14 gs-m"> + </span>

                                            {/* <Icon className={classNames(" gs-m text-2")}>
                                                minimize    
                                            </Icon> */}
                                        </Button>
                                    </p>
                                {/* Added Button Cart end */}

                                {/* Food Item Price */}
                                    <p className="float-left text-left text-black text-14">
                                        &#x20b9; 170
                                    </p>
                                {/* Food Item Price end */}
                            </div>
                        </div>
                        
                        
                        <div className="clearfix">
                            <div className="float-left text-left mb-24 w-1/2">
                                {/* Food Item Name */}
                                    <img src="assets/images/icons/veg.png" className="float-left"/>
                                    <p component="h6" variant="h6" className="text-black-dark leading-tight pb-4 capitalize text-14 flex pl-6">
                                        Sambar Rice with Aloo Fry & Mutton Curry
                                    </p>
                                {/* Food Item Name end */}
                            </div>

                            <div className="float-right text-right flex items-center">
                                {/* Added Button Cart */}
                                    <p className="float-right text-right pr-12">
                                        <Button variant="outlined" className="hover:bg-red hover:text-white rounded-none text-black-dark uppercase py-2 px-8 border-grey-lighter">
                                            {/* <Icon className={classNames(" gs-m text-2")}>
                                                add
                                            </Icon> */}
                                            
                                            <span className="text-14 gs-m"> - </span>

                                            <span className="px-10 text-10 gs-m"> 2 </span>

                                            <span className="text-14 gs-m"> + </span>

                                            {/* <Icon className={classNames(" gs-m text-2")}>
                                                minimize    
                                            </Icon> */}
                                        </Button>
                                    </p>
                                {/* Added Button Cart end */}

                                {/* Food Item Price */}
                                    <p className="float-left text-left text-black text-14">
                                        &#x20b9; 170
                                    </p>
                                {/* Food Item Price end */}
                            </div>
                        </div>
                        
                        
                        <div className="clearfix">
                            <div className="float-left text-left mb-24 w-1/2">
                                {/* Food Item Name */}
                                    <img src="assets/images/icons/non-veg.png" className="float-left"/>
                                    <p component="h6" variant="h6" className="text-black-dark leading-tight pb-4 capitalize text-14 flex pl-6">
                                        Sambar Rice with Aloo Fry & Mutton Curry
                                    </p>
                                {/* Food Item Name end */}
                            </div>

                            <div className="float-right text-right flex items-center">
                                {/* Added Button Cart */}
                                    <p className="float-right text-right pr-12">
                                        <Button variant="outlined" className="hover:bg-red hover:text-white rounded-none text-black-dark uppercase py-2 px-8 border-grey-lighter">
                                            {/* <Icon className={classNames(" gs-m text-2")}>
                                                add
                                            </Icon> */}
                                            
                                            <span className="text-14 gs-m"> - </span>

                                            <span className="px-10 text-10 gs-m"> 2 </span>

                                            <span className="text-14 gs-m"> + </span>

                                            {/* <Icon className={classNames(" gs-m text-2")}>
                                                minimize    
                                            </Icon> */}
                                        </Button>
                                    </p>
                                {/* Added Button Cart end */}

                                {/* Food Item Price */}
                                    <p className="float-left text-left text-black text-14">
                                        &#x20b9; 170
                                    </p>
                                {/* Food Item Price end */}
                            </div>
                        </div>
                        
                    </div>
                </Grid>

                <Grid item xs={12}>
                    {/* Any Special Instructions */}
                        <div>
                            <TextField
                                id="filled-multiline-static"
                                label="Any Special Instructions?"
                                multiline
                                rows="4"
                                // defaultValue="Default Value"
                                className={classNames("w-full bg-grey-light text-12 rounded-none border-none")}
                                // margin="normal"
                                variant="filled"
                            />
                        </div>
                    {/* Any Special Instructions end */}
                </Grid>

                <Grid item xs={12}>
                    {/* Promo Code section */}
                    <div>
                        <Paper className={classNames(classes.search, "shadow-none p-8 border-grey-lighter border-1 rounded-6")} elevation={1}>
                            <InputBase className={classNames(classes.input, "uppercase text-grey-lighter text-12")} placeholder="Add a Promo Code" />
                            <Typography className="text-red gs-b uppercase cursor-pointer text-12">
                                apply 
                            </Typography>
                            {/* <Typography className="text-green gs-b uppercase cursor-pointer text-12">
                                applied
                            </Typography> */}
                        </Paper>
                    </div>
                    {/* Promo Code section end */}
                </Grid>

                <Grid item xs={12}>
                    {/* Payment Details */}

                        <div style={{ width: '100%' }} className="clearfix">
                            <div display="flex" p={1} bgcolor="background.paper">
                                <Typography className="text-left float-left text-grey-darker capitalize text-14">
                                    Subtotal
                                </Typography>
                                <Typography className="text-right ml-auto float-right text-grey-darker text-14">
                                    &#x20b9; 282
                                </Typography>
                            </div>
                        </div>

                        <div style={{ width: '100%' }} className="clearfix">
                            <div display="flex" p={1} bgcolor="background.paper">
                                <Typography className="text-left float-left text-grey-darker capitalize text-14">
                                    Tax
                                </Typography>
                                <Typography className="text-right ml-auto float-right text-grey-darker text-14">
                                    &#x20b9; 282
                                </Typography>
                            </div>
                        </div>

                        <div style={{ width: '100%' }} className="clearfix">
                            <div display="flex" p={1} bgcolor="background.paper">
                                <Typography className="text-left float-left text-grey-darker capitalize text-14">
                                    Delivery Fee
                                </Typography>
                                <Typography className="text-right ml-auto float-right text-grey-darker text-14">
                                    &#x20b9; 282
                                </Typography>
                            </div>
                        </div>

                        <div style={{ width: '100%' }} className="clearfix">
                            <div display="flex" p={1} bgcolor="background.paper">
                                <Typography className="text-left float-left text-black-dark text-18 capitalize gs-b">
                                    Total
                                </Typography>
                                <Typography className="text-right ml-auto float-right text-black-dark text-18 gs-b">
                                    &#x20b9; 580
                                </Typography>
                            </div>
                        </div>

                    {/* Payment Details end */}
                </Grid>

                <Grid item xs={12}>
                    {/* Place Order Button */}
                        <div>
                            <Button variant="contained" className={classNames(classes.button, "text-white shadow-none w-full bg-red hover:bg-red hover:text-white text-12 capitalize px-40 py-12")}>
                                Place Order
                            </Button>
                        </div>
                    {/* Place Order Button end */}
                </Grid>
            {/* Cart added Item end */}

            
        </Grid>
    </div>
  );
}

CartWebContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CartWebContent);
