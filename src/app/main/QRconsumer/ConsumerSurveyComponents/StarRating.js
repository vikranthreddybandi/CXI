import React from "react";
import PropTypes from "prop-types";
// import { withStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";


const styles = {
  grid: {
    width: "60%"
  },
  textField: {
    width: 200
  }
};

class StarRating extends React.Component {


  render() {
    return (
      <div className="">
        {/* star rating question */}
        <div className="">
          <Typography className="text-18 text-grey-darkest pb-24">
            6. On a scale of 1-5, how would you rate the ambience at Starbucks?
          </Typography>      

        </div>

        <div class="star-rating">
          <input id="star-5" type="radio" name="rating" value="star-5" />
          <label for="star-5" title="5 stars">
              <i class="active fa fa-star" aria-hidden="true"></i>
          </label>
          <input id="star-4" type="radio" name="rating" value="star-4" />
          <label for="star-4" title="4 stars">
              <i class="active fa fa-star" aria-hidden="true"></i>
          </label>
          <input id="star-3" type="radio" name="rating" value="star-3" />
          <label for="star-3" title="3 stars">
              <i class="active fa fa-star" aria-hidden="true"></i>
          </label>
          <input id="star-2" type="radio" name="rating" value="star-2" />
          <label for="star-2" title="2 stars">
              <i class="active fa fa-star" aria-hidden="true"></i>
          </label>
          <input id="star-1" type="radio" name="rating" value="star-1" />
          <label for="star-1" title="1 star">
              <i class="active fa fa-star" aria-hidden="true"></i>
          </label>
        </div>
      </div>
    );
  }
}

export default StarRating;
