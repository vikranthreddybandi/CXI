import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Typography from '@material-ui/core/Typography';
import CartWebContent from './CartWebContent';
import { Grid, TextField, Paper, InputBase } from '@material-ui/core';
import classNames from 'classnames';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class CartMobileContent extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
  closeDrawer(){
    this.setState({
      bottom: false,
    });
  }
  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        {/* <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </div>
    );

    const fullList = (
      <div className={classNames(classes.fullList, "p-28")}>
          <CartWebContent closeDrawer={this.closeDrawer.bind(this)} />
      </div>
    );

    return (
      <div>

        {/* Mobile Cart */}
          <Typography className="sm:fixed fixed pin-b bg-red px-24 py-12 z-20 w-full -ml-24 clearfix flex items-center" 
          
          onClick={this.toggleDrawer('bottom', true)} autoComplete="off">

              <Typography className="float-left text-white text-left gs-b text-24 flex self-center">
               Cart
              </Typography>
              <Typography className="ml-auto text-white">
                3 Items - &#8377; 200
              </Typography>
          </Typography>


          <Drawer
            anchor="bottom"
            open={this.state.bottom}
            onClose={this.toggleDrawer('bottom', false)}
          >
            <div
              tabIndex={0}
              role="button"
              // onClick={this.toggleDrawer('bottom', false)}
              // onKeyDown={this.toggleDrawer('bottom', false)}
            >
              {fullList}
            </div>
          </Drawer>

        {/* Mobile Cart end */}

      </div>
    );
  }
}

CartMobileContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CartMobileContent);
