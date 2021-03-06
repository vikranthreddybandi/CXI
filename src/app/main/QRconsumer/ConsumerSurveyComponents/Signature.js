import 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import SignaturePad from 'react-signature-pad-wrapper';



const styles = {
  grid: {
    width: '60%',
  },
  textField: {
   
    width: 200,
  },
};

class Signature extends React.Component {
  
  render() {
    const { classes } = this.props;
    // Call an instance method
      // this.signaturePad.clear();
      // this.signaturePad.isEmpty();
      
      // Get/set an object property
      // this.signaturePad.minWidth = 5;
      // this.signaturePad.maxWidth = 10;
      // this.signaturePad.penColor = 'rgb(66, 133, 244)';

    return (
      <div className="">

          {/* signature question */}
              <div className="">
                <Typography className="text-18 text-grey-darkest pb-20 ">11. Sign Using your Touch Pad or Mouse</Typography>
                  <div className="mb-24 bg-grey-light w-full min-h-128 rounded ">
                    <SignaturePad />                  
                  </div>
            </div>

          {/* signature question ends*/}

      </div>
    );
  }
}

Signature.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Signature);
