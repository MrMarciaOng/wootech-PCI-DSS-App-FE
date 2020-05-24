import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles((theme) => ({
    
    root_2: {
        
          width: '35ch',
          mx: "auto",
        
      }
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
  if (window.location.pathname == "/")
  { return (
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
          <Router>
          
          </Router>
        </form>
        <React.Fragment>
      
          </React.Fragment>
      </React.Fragment>
    );
} 
else if (window.location.pathname == "/correct"){
  return(
  <React.Fragment>{console.log(window.location.pathname)}
          <Typography variant="h6" gutterBottom>
            Your Invoice Number
          </Typography>
          <React.Fragment>
        {invoiceNumber != "" ? (
          invoiceNumber === "C123" ? ( //end of 
                    <React.Fragment>
                      <Typography variant="h5" gutterBottom>
                        Invoice {invoiceNumber} Registered
                      </Typography>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                        <Typography variant="h5" gutterBottom>
                        Creating New Invoice {invoiceNumber}
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
else {
  return(
  <div> {console.log(window.location.pathname)}</div>
  )
}
}
ReactDOM.render(
  <InvoiceNumber/>,
  document.getElementById('root')
);