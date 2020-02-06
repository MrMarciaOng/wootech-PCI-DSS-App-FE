import {StripeProvider, Elements} from 'react-stripe-elements';
import React from "react";
import ReactDOM from "react-dom";
import StripePayment from "./StripePayment.js"
import DocumentTitle from 'react-document-title';
import { Layout } from "antd";
import StripeCheckout from 'react-stripe-checkout';
const { Header, Footer, Content } = Layout;

{
    /*
    Project : WooTech PCI-DSS Compliant App
    Team: Front-End
    Owner: Surabhi Malani
  */
  }

class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          name_on_card: null,
          credit_card_number: null,
          amount: null,
          phone_number: null,
        };
      }
    myCallback = dataFromChild => {
        console.log("After Submit " + dataFromChild);
        //this.setState({ listDataFromChild: dataFromChild });
        // this.setState({name_on_card: dataFromChild.name_on_card})
        // this.setState({credit_card_number: dataFromChild.card})
        // this.setState({amount: dataFromChild.amount}),
        // this.setState({phone_number: dataFromChild.phoneNew})

        // START -- NEW ADDITIONS 5 FEB 2020
        // add restful API call
        fetch('endpoint_api_backend_call/', {
          method: 'POST',
          body: JSON.stringify({
            full_name: dataFromChild.name_on_card,
            credit_card_number1: dataFromChild.card,
            amount_to_pay: dataFromChild.amount,
            expiry_month: dataFromChild.expiry.format('MM'),
            expiry_year: dataFromChild.expiry.format('YYYY'),
            emailID: dataFromChild.email,
            cvv: dataFromChild.cvv
          }),
        }).then(response => {
          response.json().then(
            alert(`We have sent information to backend`)
          );
        });
        // END -- NEW ADDITIONS 5 FEB 2020
      };
    // onToken = (token) => {
    //     fetch('/save-stripe-token', {
    //       method: 'POST',
    //       body: JSON.stringify(token),
    //     }).then(response => {
    //       response.json().then(data => {
    //         alert(`We are in business, ${data.email}`);
    //       });
    //     });
    //   }
    render(){
        return (
          <StripePayment callbackFromParent={this.myCallback}/>
          //Commenting the Stripe communication for now----
            // <StripeProvider apiKey = "pk_test_aq5JAyEgQCnbbJqci8QuFZYl00M3DUfTn9">
            //     <Elements>
            //         <StripePayment callbackFromParent={this.myCallback}/>
            //     </Elements>
            // </StripeProvider>

            // this StripeCheckout works but another creditcard fill in shows up.
        //     <StripeCheckout
        //     token={this.onToken}
        //     stripeKey="pk_test_aq5JAyEgQCnbbJqci8QuFZYl00M3DUfTn9"
        //   />
         
        )
    }
}
ReactDOM.render(
    <div>
      <DocumentTitle title="Payment Page" />,
      <Layout>
      <Header>Welcome</Header>
      <Content>
        <Form />
      </Content>
      <Footer>Thank You</Footer>
    </Layout>
      
      
    </div>,
  
    document.getElementById("container")
  );