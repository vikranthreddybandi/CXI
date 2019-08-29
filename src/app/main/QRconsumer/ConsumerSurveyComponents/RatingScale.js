import 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Typography, Input} from '@material-ui/core';




const styles = {
  grid: {
    width: '60%',
  },
  
};



class RatingScale extends React.Component {

  
  render() {
    const { classes } = this.props;

      
    
    
    return (
      <div className="container">

          {/* star rating question */}
              <div className="">
                <Typography className="text-18 text-grey-darkest pb-24">6. On a scale of 1-5, how would you rate the ambience at Starbucks?</Typography>
                  
                  <div className=""> 
                  <ul className="pagination modal-3">                    
                    <li><a  className="active">1</a></li>
                    <li> <a >2</a></li>
                    <li> <a >3</a></li>
                    <li> <a >4</a></li>
                    <li> <a >5</a></li>
                    <li> <a >6</a></li>
                    <li> <a >7</a></li>
                    <li> <a >8</a></li>
                    <li> <a >9</a></li>
                    </ul> 
                  </div>
            </div>

          {/* star rating question ends*/}


      </div>
    );
  }
}

RatingScale.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RatingScale);
