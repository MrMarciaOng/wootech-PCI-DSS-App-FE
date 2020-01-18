import React from 'react';
import Cleave from 'cleave.js/react';
import './imageStyle.css';
import CleavePhone from 'cleave.js/dist/addons/cleave-phone.i18n';
{/*
  Project : WooTech PCI-DSS Compliant App
  Team: Front-End
  Owner: Surabhi Malani
  Used: Cleave.js for formatting
*/}
class PhoneNumber extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            phoneRawValue:      ''

        };
        this.onPhoneChange = this.onPhoneChange.bind(this);
    }
    
    onPhoneChange(event) {
        this.props.callbackFromParent(event.target.rawValue);
    }

    render() {
        return (
            <div>
                    <Cleave className = "form-item" options={{phone: true, phoneRegionCode: 'AU'}}
                        onChange={this.onPhoneChange} style={{ width: 300}}/>
                    <br/>
                    
            </div>
            
        );
    }
}

export default PhoneNumber;