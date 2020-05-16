import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles((theme) => ({
    
    root_2: {
        
          width: '35ch',
          mx: "auto",
        
      },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginLeft: theme.spacing(3),
        mx:"auto"
      },
  }));

  const _handleTextFieldChange = (e) => {
    this.setState({
        textFieldValue: e.target.value,
        
    });
  };
 
  
export default function InvoiceNumber() {
    const classes = useStyles();
    const [invoiceNumber, setInvoiceNumber] = useState('');

    const handleClick = () => {
        console.log(invoiceNumber);
       
    };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Your Invoice Number
      </Typography>
        <form  autoComplete="off">
      <TextField className={classes.root_2}
            required
            id="invoiceNumber"
            name="invoiceNumber"
            label="Please Enter Your Invoice Number"
            fullWidth
            autoComplete="fname"
            value={invoiceNumber}
            onChange={(event) => {setInvoiceNumber(event.target.value)}}
          />
        
        
                 
        <Button className={classes.buttons}
            variant="contained"
            color="primary"
            onClick={handleClick}
            className={classes.button}
        >
            Check
            
        </Button>
       </form>
       <React.Fragment>
    {invoiceNumber != "" ? (
       invoiceNumber === "C123" ? ( //end of 
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Invoice Registered
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                    <Typography variant="h5" gutterBottom>
                    Creating New Invoice
                  </Typography>
                </React.Fragment>)) :(<React.Fragment>
                    <Typography variant="h5" gutterBottom>
                    
                  </Typography>
                </React.Fragment>)
    }
        </React.Fragment>
    </React.Fragment>
  );
}