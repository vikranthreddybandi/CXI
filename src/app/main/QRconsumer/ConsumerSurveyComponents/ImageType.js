import "date-fns";
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";

const styles = {
  grid: {
    width: "60%"
  },
  textField: {
    width: 200
  }
};

class ImageType extends React.Component {
  state = {
    selectedValue: "a"
  };

  handleChange = event => {
    this.setState({ selectedValue: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="">
        {/* star rating question */}
        <div className="">
          <Typography className="text-18 text-grey-darkest pb-20">
            5. Which Coffee cup do you prefer?
          </Typography>

          <Grid container spacing={24} className="slider__">
            <Grid item xs={6}>
              <Typography className="border-1 border-grey-darkest p-12">
                <img src={"../assets/images/survey_images/coffee.png"} />
                <Radio
                  checked={this.state.selectedValue === "a"}
                  onChange={this.handleChange}
                  value="a"
                  name="radio-button-demo"
                  aria-label="A"
                  className="text-center inline p-0"
                />
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography className="border-1 border-grey-darkest p-12">
                <img src={"../assets/images/survey_images/coffee.png"} />
                <Radio
                  checked={this.state.selectedValue === "a"}
                  onChange={this.handleChange}
                  value="a"
                  name="radio-button-demo"
                  aria-label="A"
                  className="text-center inline p-0"
                />
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography className="border-1 border-grey-darkest p-12">
                <img src={"../assets/images/survey_images/coffee.png"} />
                <Radio
                  checked={this.state.selectedValue === "a"}
                  onChange={this.handleChange}
                  value="a"
                  name="radio-button-demo"
                  aria-label="A"
                  className="text-center inline p-0"
                />
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography className="border-1 border-grey-darkest p-12">
                <img src={"../assets/images/survey_images/caffe.png"} />
                <Radio
                  checked={this.state.selectedValue === "a"}
                  onChange={this.handleChange}
                  value="b"
                  name="radio-button-demo"
                  aria-label="B"
                  className="text-center inline p-0"
                />
              </Typography>
            </Grid>
          </Grid>
        </div>

        {/* star rating question ends*/}
      </div>
    );
  }
}

ImageType.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImageType);
