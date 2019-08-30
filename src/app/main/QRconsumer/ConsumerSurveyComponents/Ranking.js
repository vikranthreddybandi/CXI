import "date-fns";
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const styles = {
  grid: {
    width: "60%"
  },
  textField: {
    width: 200
  }
};

class Ranking extends React.Component {
  state = {
    age: "",
    name: "hai",
    labelWidth: 0
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="">
        {/* star rating question */}
        <div className="">
          <Typography className="text-18 text-grey-darkest pb-20">
            7. Rank the following establishments based on coffee taste
          </Typography>
          <div className="pb-16">
            <Grid container className="flex items-center">
              <Grid item xs={1}>
                <Typography className="text-14 font-500 text-grey-darkest ">
                  1
                </Typography>
              </Grid>

              <Grid item xs={11}>
                <form className={classes.root} autoComplete="off">
                  <FormControl className="w-full">
                    <Select
                      value={this.state.age}
                      onChange={this.handleChange}
                      input={
                        <OutlinedInput
                          labelWidth={this.state.labelWidth}
                          name="age"
                          id="outlined-age-simple"
                        />
                      }
                      displayEmpty
                      name="age"
                      className={classes.selectEmpty}
                    >
                      <MenuItem value="">
                        <em>Latte</em>
                      </MenuItem>
                      <MenuItem value={10}>1</MenuItem>
                      <MenuItem value={20}>2</MenuItem>
                      <MenuItem value={30}>3</MenuItem>
                    </Select>
                  </FormControl>
                </form>
              </Grid>
            </Grid>
          </div>

          <div className="pb-16">
            <Grid container className="flex items-center">
              <Grid item xs={1}>
                <Typography className="text-14 font-500 text-grey-darkest ">
                  2
                </Typography>
              </Grid>

              <Grid item xs={11}>
                <form className={classes.root} autoComplete="off">
                  <FormControl className="w-full">
                    <Select
                      value={this.state.age}
                      onChange={this.handleChange}
                      input={
                        <OutlinedInput
                          labelWidth={this.state.labelWidth}
                          name="age"
                          id="outlined-age-simple"
                        />
                      }
                      displayEmpty
                      name="age"
                      className={classes.selectEmpty}
                    >
                      <MenuItem value="">
                        <em>Macchiato</em>
                      </MenuItem>
                      <MenuItem value={10}>1</MenuItem>
                      <MenuItem value={20}>2</MenuItem>
                      <MenuItem value={30}>3</MenuItem>
                    </Select>
                  </FormControl>
                </form>
              </Grid>
            </Grid>
          </div>

          <div className="pb-16">
            <Grid container className="flex items-center">
              <Grid item xs={1}>
                <Typography className="text-14 font-500 text-grey-darkest ">
                  3
                </Typography>
              </Grid>

              <Grid item xs={11}>
                <form className={classes.root} autoComplete="off">
                  <FormControl className="w-full">
                    <Select
                      value={this.state.age}
                      onChange={this.handleChange}
                      input={
                        <OutlinedInput
                          labelWidth={this.state.labelWidth}
                          name="age"
                          id="outlined-age-simple"
                        />
                      }
                      displayEmpty
                      name="age"
                      className={classes.selectEmpty}
                    >
                      <MenuItem value="">
                        <em>Cappuccino</em>
                      </MenuItem>
                      <MenuItem value={10}>1</MenuItem>
                      <MenuItem value={20}>2</MenuItem>
                      <MenuItem value={30}>3</MenuItem>
                    </Select>
                  </FormControl>
                </form>
              </Grid>
            </Grid>
          </div>
        </div>

        {/* star rating question ends*/}
      </div>
    );
  }
}

Ranking.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Ranking);
