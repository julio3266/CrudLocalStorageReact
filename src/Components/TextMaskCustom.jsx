import React from 'react';
import MaskedInput from 'react-text-mask';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';



const styles = ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    
    

  });
  
  const TextMaskCustom = (props) => {
    const { inputRef, ...other } = props;
  
    return (
      <MaskedInput
        {...other}
        ref={inputRef}
        mask={[/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]}
        placeholderChar={'\u2000'}
        showMask
      />
      
      
    );
  }
  
  TextMaskCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
  };
  
  class FormattedInputs extends React.Component {
   
  
   
    render() {
      const { classes } = this.props;
      return (
        <div className={classes.container}>
        
        </div>
      );
    }
  }
  
  FormattedInputs.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
 

export default withStyles(styles)(TextMaskCustom);