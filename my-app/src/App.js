import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import InvoiceNumber from "./InvoiceNumber"
import AmountPayable from "./AmountPayable"
import PaymentDetails from "./PaymentDetails"
import Trial from "./Trial"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  appBar: {
    position: 'relative',
  },
  paper: {
    
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(800 + theme.spacing(2) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  layout: {
    width: 'auto',
    palette: 'dark',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 800,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const steps = ['Enter invoice number','Amount payable', 'Payment details', 'Review your Payment'];

function GetStepContent(step) {
  {console.log(window.location.pathname)}
  switch (step) {
    
    case 0:{
      return <Trial/>
    }
    case 1:
      return <Router>  <Route exact path="/amount"/> <AmountPayable/> </Router>;
    case 2:
      return <Router> <Route exact path="/payment"/> <PaymentDetails/> </Router>;
    case 3:
      return <Router> <Route exact path="/result"/> <PaymentDetails/> </Router>;
    default:
      throw new Error('Unknown step');
  }
}

export default function HorizontalLinearStepper() {

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  }; // add logic, if activeStep api
  // postman 

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });
  
  return (
  <ThemeProvider theme={darkTheme}>
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Welcome 
            </Typography>
          </Toolbar>
      </AppBar>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
                    Payment Checkout
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? ( //end of 
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you for your order.
                  </Typography>
                  {/* needs to be dynamic */}
                  <Typography variant="subtitle1"> 
                    Your order number is #2001539. We have emailed your order confirmation, and will
                    send you an update when your order has shipped.
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {GetStepContent(activeStep)}
                  <div className={classes.buttons}>
                    {/* {activeStep !== 0 && (
                      <Button onClick={handleBack} className={classes.button}>
                        Previous
                      </Button>
                    )} */}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
    </ThemeProvider>
  );
}
ReactDOM.render(
  <HorizontalLinearStepper/>,
  document.getElementById('root')
);