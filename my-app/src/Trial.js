import React, { useState, Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import InvoiceNumber from "./InvoiceNumber"
import axios from 'axios';

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
const Trial = function (props)  {
  
  const classes = useStyles();
  const [status, setStatus] = useState(''); 
  const [value, setValue] = useState('');
  const [path, setPath] = useState('')
  const handleChange = event => {
    
}
  const getStatus = (e) => {
    console.log(status)
    return status
  }
  const processHandler = (e) => {
    console.log(value);
    let id_str = "?id="+value
    console.log(id_str)
    axios({
      //url: "http://192.168.1.122:5222" + "/getresult2",
      url: "http://f0591a0a-5dfd-4ae6-8c55-ebc50af54c54.mock.pstmn.io"+id_str,
      method: "GET",
      timeout: 0,
      processData: false,
      contentType: false,
    })
    .then((res) => {
        setStatus(res.data["status"])
    })
    .catch((err) => {
        console.log(err.response)
    })
  
  };
  const myCallback = (dataFromChild) => {
    //console.log(dataFromChild)
    setValue(dataFromChild)
  }
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/correct">
            <InvoiceNumber callbackFromParent={myCallback}/>
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
          <Route path="/badrequest">
            <InvoiceNumber callbackFromParent={myCallback}/>
                <Link to="/" >      
                  <Button className={classes.buttons}
                variant="contained"
                color="primary"
                className={classes.button}
                
            >
                NEW
                
            </Button>
            </Link>
          </Route>
          <Route path="/process">
          <InvoiceNumber callbackFromParent={myCallback}/>
                <Link to={status} >      
                <h1>See Invoice Status</h1>
            </Link>
          </Route>
          <Route path="/">
            <InvoiceNumber callbackFromParent={myCallback} />
            
            <Link to="/process" onClick = {(e) => processHandler(e)} >  
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

export default Trial

