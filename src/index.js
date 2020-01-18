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
        console.log("After Submit " + dataFromChild.first_name);
        //this.setState({ listDataFromChild: dataFromChild });
        this.setState({name_on_card: dataFromChild.name_on_card})
        this.setState({credit_card_number: dataFromChild.card})
        this.setState({amount: dataFromChild.amount}),
        this.setState({phone_number: dataFromChild.phoneNew})
      };
    onToken = (token) => {
        fetch('/save-stripe-token', {
          method: 'POST',
          body: JSON.stringify(token),
        }).then(response => {
          response.json().then(data => {
            alert(`We are in business, ${data.email}`);
          });
        });
      }
    render(){
        return (
            <StripeProvider apiKey = "pk_test_aq5JAyEgQCnbbJqci8QuFZYl00M3DUfTn9">
                <Elements>
                    <StripePayment callbackFromParent={this.myCallback}/>
                </Elements>
            </StripeProvider>

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