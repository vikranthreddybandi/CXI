import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { FusePageSimple, DemoContent } from "@fuse";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import WelcomeSurvey from "./WelcomeSurvey";

const styles = theme => ({
  layoutRoot: {},
  root: {
    flexGrow: 1
  }
});

class QRConsumer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="container">
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <WelcomeSurvey />
          </Grid>
        </Grid>
      </div>
    );
  }
}

QRConsumer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(QRConsumer);
