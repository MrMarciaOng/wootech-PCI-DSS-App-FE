import {StripeProvider, Elements} from 'react-stripe-elements';
import React from "react";
import ReactDOM from "react-dom";
import StripePayment from "./StripePayment.js"
import DocumentTitle from 'react-document-title';
import { Layout } from "antd";
const { Header, Footer, Content } = Layout;

class Form extends React.Component{
    render(){
        return (
            <StripeProvider apiKey = "pk_test_aq5JAyEgQCnbbJqci8QuFZYl00M3DUfTn9">
                <Elements>
                    <StripePayment/>
                </Elements>
            </StripeProvider>
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