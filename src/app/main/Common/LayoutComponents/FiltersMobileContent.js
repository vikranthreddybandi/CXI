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
});

function FiltersMobileContent(props) {
  const { classes, theme } = props;

  return (
    <div>
        <Grid container spacing={16}>

            {/* Filters Mobile */}

            <Grid item xs={12} sm={6} md={4}>
                Filters Mobile Content
            </Grid>

            {/* Filters Mobile end */}
        
        </Grid>
    </div>

  );
}

FiltersMobileContent.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FiltersMobileContent);
