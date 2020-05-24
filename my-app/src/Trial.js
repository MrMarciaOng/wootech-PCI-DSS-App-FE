import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import InvoiceNumber from "./InvoiceNumber"

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
export default function Trial()  {
  
  const classes = useStyles();
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/correct">
            <InvoiceNumber  />
                <Link to="/" >      
            <Button className={classes.buttons}
                variant="contained"
                color="primary"
                className={classes.button}
            >
                Re-Enter
                
            </Button>
            </Link>
          </Route>
          <Route path="/">
            <InvoiceNumber />
            <Link to="/correct" >      
        <Button className={classes.buttons}
              variant="contained"
              color="primary"
              className={classes.button}
          >
              Check
              
          </Button>
          </Link>
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}

