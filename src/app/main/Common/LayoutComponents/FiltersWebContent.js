import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Typography } from '@material-ui/core';
import classNames from 'classnames';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit * 1,
    minWidth: 150,
    // paddingLeft: 2 + 'rem', 
    // paddingRight: 2 + 'rem', 
    // paddingTop: 8 + 'px', 
    // paddingBottom: 8 + 'px', 
  },
//   formControl_1: {
//     minWidth: 100,
//   },
//   formControl_2: {
//     minWidth: 110,
//   },
//   formControl_3: {
//     minWidth: 100,
//   },
//   formControl_4: {
//     minWidth: 100,
//   },
//   formControl_5: {
//     minWidth: 130,
//   },
//   formControl_6: {
//     minWidth: 150,
//   },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  select: {
    // paddingBottom: 8 + 'px',
    // paddingTop: 8 + 'px',
    // paddingLeft: 2 + 'rem',
    // paddingRight: 2 + 'rem',
    // height: 35,
    // padding: 10,
  }
});

class FiltersWebContent extends React.Component {
  state = {
    age: '',
    name: 'hai',
    labelWidth: 0,
  };

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">

        {/* Sort by */}
            <Typography className="flex items-center text-black">
                Sort by
            </Typography>
        {/* Sort by end */}

        {/* Meal Type Dropdown */}
            <FormControl variant="outlined" className={classNames(classes.formControl, classes.formControl_1)}>
                <Select
                    value={this.state.age}
                    onChange={this.handleChange}
                    className={classNames(classes.select)}
                    input={
                    <OutlinedInput
                        labelWidth={this.state.labelWidth}
                        name="Meal Type"
                        id="meal_type"
                    />
                    }
                >
                    <MenuItem value={10}>Meal Type</MenuItem>
                    <MenuItem value={20}>Meal Type</MenuItem>
                    <MenuItem value={30}>Meal Type</MenuItem>
                </Select>
            </FormControl>
        {/* Meal Type Dropdown end */}

        {/* Cusines Dropdown */}
            <FormControl variant="outlined" className={classNames(classes.formControl, classes.formControl_2)}>
                <InputLabel
                    ref={ref => {
                    this.InputLabelRef = ref;
                    }}
                    htmlFor="cuisines"
                >
                    Cuisines
                </InputLabel>
                <Select
                    className={classNames(classes.select)}
                    value={this.state.age}
                    onChange={this.handleChange}
                    input={
                    <OutlinedInput
                        labelWidth={this.state.labelWidth}
                        name="Cuisines"
                        id="cuisines"
                    />
                    }
                >
                    <MenuItem value={10}>North Indian</MenuItem>
                    <MenuItem value={20}>South Indian</MenuItem>
                    <MenuItem value={30}>Chineese</MenuItem>
                </Select>
            </FormControl>
        {/* Cusines Dropdown end */}


        {/* Rating Dropdown */}
            <FormControl variant="outlined" className={classNames(classes.formControl, classes.formControl_3)}>
                <InputLabel
                    ref={ref => {
                    this.InputLabelRef = ref;
                    }}
                    htmlFor="rating"
                >
                    Rating
                </InputLabel>
                <Select
                    className={classNames(classes.select)}
                    value={this.state.age}
                    onChange={this.handleChange}
                    input={
                    <OutlinedInput
                        labelWidth={this.state.labelWidth}
                        name="Rating"
                        id="rating"
                    />
                    }
                >
                    <MenuItem value={10}>High to Low</MenuItem>
                    <MenuItem value={20}>Low -  High</MenuItem>
                </Select>
            </FormControl>
        {/* Rating Dropdown end */}



        {/* Price Dropdown */}
            <FormControl variant="outlined" className={classNames(classes.formControl, classes.formControl_4)}>
                <InputLabel
                    ref={ref => {
                    this.InputLabelRef = ref;
                    }}
                    htmlFor="rating"
                >
                    Price
                </InputLabel>
                <Select
                    className={classNames(classes.select)}
                    value={this.state.age}
                    onChange={this.handleChange}
                    input={
                    <OutlinedInput
                        labelWidth={this.state.labelWidth}
                        name="Price"
                        id="price"
                    />
                    }
                >
                    <MenuItem value={10}>&#8377; 0 - &#8377; 99</MenuItem>
                    <MenuItem value={20}>&#8377; 100 - &#8377; 199</MenuItem>
                </Select>
            </FormControl>
        {/* Price Dropdown end */}


        {/* Chef Name Dropdown */}
            <FormControl variant="outlined" className={classNames(classes.formControl, classes.formControl_5)}>
                <InputLabel
                    ref={ref => {
                    this.InputLabelRef = ref;
                    }}
                    htmlFor="rating"
                >
                    Chef Name
                </InputLabel>
                <Select
                    className={classNames(classes.select)}
                    value={this.state.age}
                    onChange={this.handleChange}
                    input={
                    <OutlinedInput
                        labelWidth={this.state.labelWidth}
                        name="Chef Name"
                        id="ChefName"
                    />
                    }
                >
                    <MenuItem value={10}>Rani Mahalakshmi</MenuItem>
                    <MenuItem value={20}>Subbaiah</MenuItem>
                </Select>
            </FormControl>
        {/* Chef Name Dropdown end */}


        {/* Veg or Non veg Dropdown */}
            {/* <FormControl variant="outlined" className={classNames(classes.formControl, classes.formControl_6)}>
                <InputLabel
                    ref={ref => {
                    this.InputLabelRef = ref;
                    }}
                    htmlFor="rating"
                >
                    Veg or Non Veg
                </InputLabel>
                <Select
                    className={classNames(classes.select)}
                    value={this.state.age}
                    onChange={this.handleChange}
                    input={
                    <OutlinedInput
                        labelWidth={this.state.labelWidth}
                        name="Veg or Non Veg"
                        id="veg_or_non_veg"
                    />
                    }
                >
                    <MenuItem value={10}>Veg Only</MenuItem>
                    <MenuItem value={20}>Non Veg Only</MenuItem>
                    <MenuItem value={20}>Veg and Non Veg</MenuItem>
                </Select>
            </FormControl> */}
        {/* Veg or Non veg Dropdown end */}


      </form>
    );
  }
}

FiltersWebContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FiltersWebContent);
