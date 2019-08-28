import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import classNames from 'classnames';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  avatar: {
    height: 20 + 'px',
    width: 29 + 'px',
  },
  root: {
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    // width: 400,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
});


function SearchContent(props) {
  const { classes, theme } = props;


  return (
    <div>
        <Grid container spacing={24} className={classNames("h-400 lg:h-160 lg:p-28 search-container mx-auto py-16 w-full")}>


            <Grid item xs={12} sm={12} md={12}>
              <div className="search-container flex items-center">
                <Paper className={classNames(classes.root, "mx-auto text-grey-lighter shadow-none border-1 w-full rounded-6")} elevation={1}>
                  <InputBase className={classNames(classes.input, "gs-r text-20 text-grey")} placeholder="Search for dishes or cuisines......" />
                  <IconButton className={classNames(classes.iconButton, "text-red")} aria-label="Search">
                    <SearchIcon />
                  </IconButton>
                  <Divider className={classes.divider} />
                </Paper>
              </div>
            </Grid>


            {/* Food Card */}

            <Grid item xs={12} sm={6} md={4}>
                <Card className={classNames(classes.card, "rounded-6 shadow-none border-1 border-grey-lighter")}>
                    <div className={classes.details}>

                        <CardContent className={classes.content}>

                            {/* Food Type like indian, chineese */}
                                <Typography className="uppercase text-12 gs-b text-grey-darkest pb-8">
                                    indian
                                </Typography>
                            {/* Food Type like indian, chineese end */}

                            
                            <Typography component="h6" variant="h6" className="flex items-center">

                                {/* Card Heading */}
                                    <div className="text-black-dark gs-b leading-none w-full float-left text-18">
                                        Mutton Biryani with keema fry
                                    </div>
                                {/* Card Heading end */}


                                {/* Rating */}
                                    <div className="text-right text-red float-right">
                                        <Avatar aria-label="Recipe" className={classNames(classes.avatar, "text-10 bg-green text-white rounded-4 bg-green")}>
                                            4.0
                                        </Avatar>
                                    </div>
                                {/* Rating end */}

                            </Typography>

                            
                            {/* Food Description */}
                                <Typography className="leading-tight text-12 py-16">
                                    <span className="text-grey-darkest">
                                        Combination of rice and sambar which is cooked with vegetables and sambar powder. 
                                    </span> 
                                    <span className="text-red cursor-pointer gs-m"> See more + </span>
                                </Typography>
                            {/* Food Description end */}


                            {/* Chef Details and price */}
                                <Typography>
                                    <div className="float-left text-left">

                                        {/* Chef Name */}
                                            <p component="h6" variant="h6" className="text-black-dark gs-b leading-none pb-4 capitalize">
                                                Kavitha rani
                                            </p>
                                        {/* Chef Name end */}


                                        {/* Food Rating */}
                                            <p component="h6" variant="h6" className="text-grey-darkest leading-none capitalize text-10">
                                                Rating 4.2
                                            </p>
                                        {/* Food Rating end */}


                                        
                                    </div>

                                    <div className="float-right text-right flex items-center">

                                        {/* Food Price */}
                                            <p className="float-left text-left text-black pr-8 text-14">
                                                &#x20b9; 170
                                            </p>
                                        {/* Food Price end */}


                                        {/* Add Button Cart */}
                                            <p className="float-right text-right">
                                                <Button variant="outlined" color="secondary" className="hover:bg-red hover:text-white text-red uppercase text-10 py-2 px-6">
                                                    Add
                                                </Button>
                                            </p>
                                        {/* Add Button Cart end */}
                                    </div>
                                </Typography>
                            {/* Chef Details and price end */}
                        </CardContent>

                    </div>
                </Card>
            </Grid>

            {/* Food Card End */}



            {/* Food Card */}

            <Grid item xs={12} sm={6} md={4}>
                <Card className={classNames(classes.card, "rounded-6 shadow-none border-1 border-grey-lighter")}>
                    <div className={classes.details}>

                        <CardContent className={classes.content}>

                            {/* Food Type like indian, chineese */}
                                <Typography className="uppercase text-12 gs-b text-grey-darkest pb-8">
                                    indian
                                </Typography>
                            {/* Food Type like indian, chineese end */}

                            
                            <Typography component="h6" variant="h6" className="flex items-center">

                                {/* Card Heading */}
                                    <div className="text-black-dark gs-b leading-none w-full float-left text-18">
                                        Mutton Biryani with keema fry
                                    </div>
                                {/* Card Heading end */}


                                {/* Rating */}
                                    <div className="text-right text-red float-right">
                                        <Avatar aria-label="Recipe" className={classNames(classes.avatar, "text-10 bg-green text-white rounded-4 bg-green")}>
                                            4.0
                                        </Avatar>
                                    </div>
                                {/* Rating end */}

                            </Typography>

                            
                            {/* Food Description */}
                                <Typography className="leading-tight text-12 py-16">
                                    <span className="text-grey-darkest">
                                        Combination of rice and sambar which is cooked with vegetables and sambar powder. 
                                    </span> 
                                    <span className="text-red cursor-pointer gs-m"> See more + </span>
                                </Typography>
                            {/* Food Description end */}


                            {/* Chef Details and price */}
                                <Typography>
                                    <div className="float-left text-left">

                                        {/* Chef Name */}
                                            <p component="h6" variant="h6" className="text-black-dark gs-b leading-none pb-4 capitalize">
                                                Kavitha rani
                                            </p>
                                        {/* Chef Name end */}


                                        {/* Food Rating */}
                                            <p component="h6" variant="h6" className="text-grey-darkest leading-none capitalize text-10">
                                                Rating 4.2
                                            </p>
                                        {/* Food Rating end */}


                                        
                                    </div>

                                    <div className="float-right text-right flex items-center">

                                        {/* Food Price */}
                                            <p className="float-left text-left text-black pr-8 text-14">
                                                &#x20b9; 170
                                            </p>
                                        {/* Food Price end */}


                                        {/* Add Button Cart */}
                                            <p className="float-right text-right">
                                                <Button variant="outlined" color="secondary" className="hover:bg-red hover:text-white text-red uppercase text-10 py-2 px-6">
                                                    Add
                                                </Button>
                                            </p>
                                        {/* Add Button Cart end */}
                                    </div>
                                </Typography>
                            {/* Chef Details and price end */}
                        </CardContent>

                    </div>
                </Card>
            </Grid>

            {/* Food Card End */}



            {/* Food Card */}

            <Grid item xs={12} sm={6} md={4}>
                <Card className={classNames(classes.card, "rounded-6 shadow-none border-1 border-grey-lighter")}>
                    <div className={classes.details}>

                        <CardContent className={classes.content}>

                            {/* Food Type like indian, chineese */}
                                <Typography className="uppercase text-12 gs-b text-grey-darkest pb-8">
                                    indian
                                </Typography>
                            {/* Food Type like indian, chineese end */}

                            
                            <Typography component="h6" variant="h6" className="flex items-center">

                                {/* Card Heading */}
                                    <div className="text-black-dark gs-b leading-none w-full float-left text-18">
                                        Mutton Biryani with keema fry
                                    </div>
                                {/* Card Heading end */}


                                {/* Rating */}
                                    <div className="text-right text-red float-right">
                                        <Avatar aria-label="Recipe" className={classNames(classes.avatar, "text-10 bg-green text-white rounded-4 bg-green")}>
                                            4.0
                                        </Avatar>
                                    </div>
                                {/* Rating end */}

                            </Typography>

                            
                            {/* Food Description */}
                                <Typography className="leading-tight text-12 py-16">
                                    <span className="text-grey-darkest">
                                        Combination of rice and sambar which is cooked with vegetables and sambar powder. 
                                    </span> 
                                    <span className="text-red cursor-pointer gs-m"> See more + </span>
                                </Typography>
                            {/* Food Description end */}


                            {/* Chef Details and price */}
                                <Typography>
                                    <div className="float-left text-left">

                                        {/* Chef Name */}
                                            <p component="h6" variant="h6" className="text-black-dark gs-b leading-none pb-4 capitalize">
                                                Kavitha rani
                                            </p>
                                        {/* Chef Name end */}


                                        {/* Food Rating */}
                                            <p component="h6" variant="h6" className="text-grey-darkest leading-none capitalize text-10">
                                                Rating 4.2
                                            </p>
                                        {/* Food Rating end */}


                                        
                                    </div>

                                    <div className="float-right text-right flex items-center">

                                        {/* Food Price */}
                                            <p className="float-left text-left text-black pr-8 text-14">
                                                &#x20b9; 170
                                            </p>
                                        {/* Food Price end */}


                                        {/* Add Button Cart */}
                                            <p className="float-right text-right">
                                                <Button variant="outlined" color="secondary" className="hover:bg-red hover:text-white text-red uppercase text-10 py-2 px-6">
                                                    Add
                                                </Button>
                                            </p>
                                        {/* Add Button Cart end */}
                                    </div>
                                </Typography>
                            {/* Chef Details and price end */}
                        </CardContent>

                    </div>
                </Card>
            </Grid>

            {/* Food Card End */}



            {/* Food Card */}

            <Grid item xs={12} sm={6} md={4}>
                <Card className={classNames(classes.card, "rounded-6 shadow-none border-1 border-grey-lighter")}>
                    <div className={classes.details}>

                        <CardContent className={classes.content}>

                            {/* Food Type like indian, chineese */}
                                <Typography className="uppercase text-12 gs-b text-grey-darkest pb-8">
                                    indian
                                </Typography>
                            {/* Food Type like indian, chineese end */}

                            
                            <Typography component="h6" variant="h6" className="flex items-center">

                                {/* Card Heading */}
                                    <div className="text-black-dark gs-b leading-none w-full float-left text-18">
                                        Mutton Biryani with keema fry
                                    </div>
                                {/* Card Heading end */}


                                {/* Rating */}
                                    <div className="text-right text-red float-right">
                                        <Avatar aria-label="Recipe" className={classNames(classes.avatar, "text-10 bg-green text-white rounded-4 bg-green")}>
                                            4.0
                                        </Avatar>
                                    </div>
                                {/* Rating end */}

                            </Typography>

                            
                            {/* Food Description */}
                                <Typography className="leading-tight text-12 py-16">
                                    <span className="text-grey-darkest">
                                        Combination of rice and sambar which is cooked with vegetables and sambar powder. 
                                    </span> 
                                    <span className="text-red cursor-pointer gs-m"> See more + </span>
                                </Typography>
                            {/* Food Description end */}


                            {/* Chef Details and price */}
                                <Typography>
                                    <div className="float-left text-left">

                                        {/* Chef Name */}
                                            <p component="h6" variant="h6" className="text-black-dark gs-b leading-none pb-4 capitalize">
                                                Kavitha rani
                                            </p>
                                        {/* Chef Name end */}


                                        {/* Food Rating */}
                                            <p component="h6" variant="h6" className="text-grey-darkest leading-none capitalize text-10">
                                                Rating 4.2
                                            </p>
                                        {/* Food Rating end */}


                                        
                                    </div>

                                    <div className="float-right text-right flex items-center">

                                        {/* Food Price */}
                                            <p className="float-left text-left text-black pr-8 text-14">
                                                &#x20b9; 170
                                            </p>
                                        {/* Food Price end */}


                                        {/* Add Button Cart */}
                                            <p className="float-right text-right">
                                                <Button variant="outlined" color="secondary" className="hover:bg-red hover:text-white text-red uppercase text-10 py-2 px-6">
                                                    Add
                                                </Button>
                                            </p>
                                        {/* Add Button Cart end */}
                                    </div>
                                </Typography>
                            {/* Chef Details and price end */}
                        </CardContent>

                    </div>
                </Card>
            </Grid>

            {/* Food Card End */}



            {/* Food Card */}

            <Grid item xs={12} sm={6} md={4}>
                <Card className={classNames(classes.card, "rounded-6 shadow-none border-1 border-grey-lighter")}>
                    <div className={classes.details}>

                        <CardContent className={classes.content}>

                            {/* Food Type like indian, chineese */}
                                <Typography className="uppercase text-12 gs-b text-grey-darkest pb-8">
                                    indian
                                </Typography>
                            {/* Food Type like indian, chineese end */}

                            
                            <Typography component="h6" variant="h6" className="flex items-center">

                                {/* Card Heading */}
                                    <div className="text-black-dark gs-b leading-none w-full float-left text-18">
                                        Mutton Biryani with keema fry
                                    </div>
                                {/* Card Heading end */}


                                {/* Rating */}
                                    <div className="text-right text-red float-right">
                                        <Avatar aria-label="Recipe" className={classNames(classes.avatar, "text-10 bg-green text-white rounded-4 bg-green")}>
                                            4.0
                                        </Avatar>
                                    </div>
                                {/* Rating end */}

                            </Typography>

                            
                            {/* Food Description */}
                                <Typography className="leading-tight text-12 py-16">
                                    <span className="text-grey-darkest">
                                        Combination of rice and sambar which is cooked with vegetables and sambar powder. 
                                    </span> 
                                    <span className="text-red cursor-pointer gs-m"> See more + </span>
                                </Typography>
                            {/* Food Description end */}


                            {/* Chef Details and price */}
                                <Typography>
                                    <div className="float-left text-left">

                                        {/* Chef Name */}
                                            <p component="h6" variant="h6" className="text-black-dark gs-b leading-none pb-4 capitalize">
                                                Kavitha rani
                                            </p>
                                        {/* Chef Name end */}


                                        {/* Food Rating */}
                                            <p component="h6" variant="h6" className="text-grey-darkest leading-none capitalize text-10">
                                                Rating 4.2
                                            </p>
                                        {/* Food Rating end */}


                                        
                                    </div>

                                    <div className="float-right text-right flex items-center">

                                        {/* Food Price */}
                                            <p className="float-left text-left text-black pr-8 text-14">
                                                &#x20b9; 170
                                            </p>
                                        {/* Food Price end */}


                                        {/* Add Button Cart */}
                                            <p className="float-right text-right">
                                                <Button variant="outlined" color="secondary" className="hover:bg-red hover:text-white text-red uppercase text-10 py-2 px-6">
                                                    Add
                                                </Button>
                                            </p>
                                        {/* Add Button Cart end */}
                                    </div>
                                </Typography>
                            {/* Chef Details and price end */}
                        </CardContent>

                    </div>
                </Card>
            </Grid>

            {/* Food Card End */}



            {/* Food Card */}

            <Grid item xs={12} sm={6} md={4}>
                <Card className={classNames(classes.card, "rounded-6 shadow-none border-1 border-grey-lighter")}>
                    <div className={classes.details}>

                        <CardContent className={classes.content}>

                            {/* Food Type like indian, chineese */}
                                <Typography className="uppercase text-12 gs-b text-grey-darkest pb-8">
                                    indian
                                </Typography>
                            {/* Food Type like indian, chineese end */}

                            
                            <Typography component="h6" variant="h6" className="flex items-center">

                                {/* Card Heading */}
                                    <div className="text-black-dark gs-b leading-none w-full float-left text-18">
                                        Mutton Biryani with keema fry
                                    </div>
                                {/* Card Heading end */}


                                {/* Rating */}
                                    <div className="text-right text-red float-right">
                                        <Avatar aria-label="Recipe" className={classNames(classes.avatar, "text-10 bg-green text-white rounded-4 bg-green")}>
                                            4.0
                                        </Avatar>
                                    </div>
                                {/* Rating end */}

                            </Typography>

                            
                            {/* Food Description */}
                                <Typography className="leading-tight text-12 py-16">
                                    <span className="text-grey-darkest">
                                        Combination of rice and sambar which is cooked with vegetables and sambar powder. 
                                    </span> 
                                    <span className="text-red cursor-pointer gs-m"> See more + </span>
                                </Typography>
                            {/* Food Description end */}


                            {/* Chef Details and price */}
                                <Typography>
                                    <div className="float-left text-left">

                                        {/* Chef Name */}
                                            <p component="h6" variant="h6" className="text-black-dark gs-b leading-none pb-4 capitalize">
                                                Kavitha rani
                                            </p>
                                        {/* Chef Name end */}


                                        {/* Food Rating */}
                                            <p component="h6" variant="h6" className="text-grey-darkest leading-none capitalize text-10">
                                                Rating 4.2
                                            </p>
                                        {/* Food Rating end */}


                                        
                                    </div>

                                    <div className="float-right text-right flex items-center">

                                        {/* Food Price */}
                                            <p className="float-left text-left text-black pr-8 text-14">
                                                &#x20b9; 170
                                            </p>
                                        {/* Food Price end */}


                                        {/* Add Button Cart */}
                                            <p className="float-right text-right">
                                                <Button variant="outlined" color="secondary" className="hover:bg-red hover:text-white text-red uppercase text-10 py-2 px-6">
                                                    Add
                                                </Button>
                                            </p>
                                        {/* Add Button Cart end */}
                                    </div>
                                </Typography>
                            {/* Chef Details and price end */}
                        </CardContent>

                    </div>
                </Card>
            </Grid>

            {/* Food Card End */}
            



        </Grid>

    </div>


  );
}

SearchContent.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SearchContent);
