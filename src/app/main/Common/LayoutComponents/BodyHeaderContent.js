import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
// import body_header_bg from 'assets/images/backgrounds/header_banner.png';

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
  body_header_banner: {
    backgroundImage: `url(${'assets/images/backgrounds/header_banner.png'})`,
    backgroundSize: 'cover',
    overflow: 'hidden',
  }
});

function BodyHeaderContent(props) {
  const { classes, theme } = props;

  return (
    <div>
        <Grid container className={classNames(classes.body_header_banner, "h-400 sm:h-224 lg:h-160 lg:p-28")}>
            <div className="container flex items-center">
                <Grid container spacing={24} className="flex items-center px-28">
                    <Grid item xs={12} sm={7} md={6}>
                        <Typography className="text-white capitalize" variant="h4">
                            Healthy & delicious home cooked food. Delivered instantly.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={5} md={4} className="ml-auto">
                        <Button variant="contained" className={classNames(classes.button, "text-white bg-red hover:bg-white hover:text-black text-12 capitalize px-40 py-8")}>
                            Menu
                        </Button>
                        <Button variant="contained" className={classNames(classes.button, "text-black bg-white hover:bg-red hover:text-white text-12 capitalize px-40 py-8 ml-12")}>
                            Chefs
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </Grid>
    </div>

  );
}

BodyHeaderContent.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(BodyHeaderContent);
