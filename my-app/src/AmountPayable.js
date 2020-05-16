import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import CurrencyTextField from '@unicef/material-ui-currency-textfield'
import Button from '@material-ui/core/Button';
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

  const currencies = [
    {
      value: 'USD',
      label: 'USD $',
    },
    {
      value: 'EUR',
      label: 'EUR €',
    },
    {
      value: 'BTC',
      label: 'BTC ฿',
    },
    {
      value: 'JPY',
      label: 'JPY ¥',
    },
    {
      value: 'SGD',
      label: 'SGD $',
    },
  ];
 
   
export default function AmountPayable() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('EUR');
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <React.Fragment>
      <Typography component="h2" variant="h5" align="center">
                    SGD $100.00
        </Typography>

        <TextField
          id="standard-select-currency"
          select
          label="Select"
          value={currency}
          onChange={handleChange}
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <CurrencyTextField
        label="Amount"
        currencySymbol = ""
        variant="standard"
        outputFormat="string"
    />
    {/* https://unicef.github.io/material-ui-currency-textfield/ */}
    <Button className={classes.buttons}
            variant="contained"
            color="primary"
            
        >
            Confirm
            
        </Button>
    </React.Fragment>
   
  );
}