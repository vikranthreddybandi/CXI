
import React from 'react';
import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';




const styles = {
  grid: {
    width: '60%',
  },
  textField: {
   
    width: 200,
  },
};



class StarRating extends React.Component {

  
  render() {
      
    
    
    return (
      <div className="container">

          {/* star rating question */}
              <div className="">
                <Typography className="text-18 text-grey-darkest pb-24">7. On a scale of 1-5, how would you rate the ambience at Starbucks?</Typography>
                  <div className="">
                      
                  <fieldset className="rating ">
                    <input type="radio" id="star5" name="rating" value="5" /><label className = "full" for="star5" title="Awesome - 5 stars"></label>
                    <input type="radio" id="star4half" name="rating" value="4 and a half" /><label className="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                    <input type="radio" id="star4" name="rating" value="4" /><label className = "full" for="star4" title="Pretty good - 4 stars"></label>
                    <input type="radio" id="star3half" name="rating" value="3 and a half" /><label className="half" for="star3half" title="Meh - 3.5 stars"></label>
                    <input type="radio" id="star3" name="rating" value="3" /><label className = "full" for="star3" title="Meh - 3 stars"></label>
                    <input type="radio" id="star2half" name="rating" value="2 and a half" /><label className="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
                    <input type="radio" id="star2" name="rating" value="2" /><label className = "full" for="star2" title="Kinda bad - 2 stars"></label>
                    <input type="radio" id="star1half" name="rating" value="1 and a half" /><label className="half" for="star1half" title="Meh - 1.5 stars"></label>
                    <input type="radio" id="star1" name="rating" value="1" /><label className = "full" for="star1" title="Sucks big time - 1 star"></label>
                    <input type="radio" id="starhalf" name="rating" value="half" /><label className="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
                  </fieldset>

                  </div>
            </div>

          {/* star rating question ends*/}

      </div>
    );
  }
}


export default (StarRating);
