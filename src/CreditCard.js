import React from 'react';
import Cleave from 'cleave.js/react';
import visa from './logo/visa-true.png';
import mastercard from './logo/mastercard.png';
import amex from './logo/amex2.png';
import diners from './logo/diners.png';
import jcb from './logo/jcb.png';
import discover from './logo/discover.png'
import './imageStyle.css';
{/*
  Project : WooTech PCI-DSS Compliant App
  Team: Front-End
  Owner: Surabhi Malani
  Used: Cleave.js for formatting
  Credits to logos images on google.com
*/}
class CreditCard extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            creditCardType:     '',
            creditCardRawValue: '',
            phoneRawValue:      '',
            dateRawValue:       '',
            numeralRawValue:    '',
            customRawValue:     '',
            open: true,

        };
        this.onCreditCardChange = this.onCreditCardChange.bind(this);
        this.onCreditCardTypeChanged = this.onCreditCardTypeChanged.bind(this);
        this.onPhoneChange = this.onPhoneChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onNumeralChange = this.onNumeralChange.bind(this);
        this.onCustomChange = this.onCustomChange.bind(this);
    }
    
    onCreditCardChange(event){
        this.setState({creditCardRawValue: event.target.rawValue});
        console.log(this.state.creditCardType);
        
    }
    onCreditCardTypeChanged(type){
        console.log(type);
        this.setState({creditCardType: type});
        
    }
    onPhoneChange(event) {
        this.setState({phoneRawValue: event.target.rawValue});
    }

    onDateChange(event) {
        this.setState({dateRawValue: event.target.rawValue});
    }

    onNumeralChange(event) {
        this.setState({numeralRawValue: event.target.rawValue});
    }

    onCustomChange(event) {
        this.setState({customRawValue: event.target.rawValue});
    }
    render() {

        return (
            <div>
                    <Cleave className = "form-item"
                options={
                    {creditCard: true, 
                        onCreditCardTypeChanged: this.onCreditCardTypeChanged}}
                        onChange={this.onCreditCardChange}
                        style={{ width: 180 }}/>
                    <br/>
                    {(this.state.creditCardType === "visa") ? 
                    (
                        <img alt="example" src={visa} className = "yesLogo"  />
                    ):(
                        <img alt="example" src={visa} className = "noLogo"  />
                    )}
                    {(this.state.creditCardType === "mastercard") ? 
                    (
                        <img alt="example" src={mastercard} className = "yesLogo"  />
                    ):(
                        <img alt="example" src={mastercard} className = "noLogo"  />
                    )}
                    {(this.state.creditCardType === "amex") ? 
                    (
                        <img alt="example" src={amex} className = "yesLogoh2"  />
                    ):(
                        <img alt="example" src={amex} className = "noLogoh2"  />
                    )}
                    {(this.state.creditCardType === "diners") ? 
                    (
                        <img alt="example" src={diners} className = "yesLogo"  />
                    ):(
                        <img alt="example" src={diners} className = "noLogo"  />
                    )}
                    {(this.state.creditCardType === "jcb") ? 
                    (
                        <img alt="example" src={jcb} className = "yesLogoh1"  />
                    ):(
                        <img alt="example" src={jcb} className = "noLogoh1"  />
                    )}
                    {(this.state.creditCardType === "discover") ? 
                    (
                        <img alt="discover" src={discover} className = "yesLogoh3"  />
                    ):(
                        <img alt="example" src={discover} className = "noLogoh3"  />
                    )}
                    
                    <p className = "extra"> We only accept these payment types ! </p>
            
            </div>
            
        );
    }
}

export default CreditCard;