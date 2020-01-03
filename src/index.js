import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import CreditCard from "./CreditCard";
import NumericInput from "./NumericInput";
import Security from './Security';
import Amount from './Amount';
import { loadReCaptcha } from 'react-recaptcha-google'
import {
  Form,
  Input,
  Select,
  Button,
  AutoComplete
} from "antd";
import { Layout } from "antd";
import PhoneNumber from "./PhoneNumber";

const { Header, Footer, Content } = Layout;

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

// const residences = [
//   {
//     value: "zhejiang",
//     label: "Zhejiang",
//     children: [
//       {
//         value: "hangzhou",
//         label: "Hangzhou",
//         children: [
//           {
//             value: "xihu",
//             label: "West Lake"
//           }
//         ]
//       }
//     ]
//   },
//   {
//     value: "jiangsu",
//     label: "Jiangsu",
//     children: [
//       {
//         value: "nanjing",
//         label: "Nanjing",
//         children: [
//           {
//             value: "zhonghuamen",
//             label: "Zhong Hua Men"
//           }
//         ]
//       }
//     ]
//   }
// ];

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };
  componentDidMount() {
    loadReCaptcha();
  };
  onChange = value => {
    this.setState({ value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = [".com", ".org", ".net"].map(
        domain => `${value}${domain}`
      );
    }
    this.setState({ autoCompleteResult });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 }
      },
      wrapperCol: {
        xs: { span: 12 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };
    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "86"
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
      <Form className= "form-color"{...formItemLayout} onSubmit={this.handleSubmit}>
        <br/>
        <Form.Item label="FirstName" >
          {getFieldDecorator("first_name", {
            rules: [
              {
                required: true,
                message: "Please input your first name!"
              }
            ]
          })(<Input style={{ width: 300}}/>)}
        </Form.Item>
        <Form.Item label="LastName">
          {getFieldDecorator("last_name", {
            rules: [
              {
                required: true,
                message: "Please input your last name!"
              }
            ]
          })(<Input style={{ width: 300}}/>)}
        </Form.Item>
        {/*
        <Form.Item label=" ">
          <Radio.Group defaultValue="a" buttonStyle="solid">
            <Radio.Button value="a">MasterCard</Radio.Button>
            <Radio.Button value="b">Visa</Radio.Button>
            <Radio.Button value="c">American Express</Radio.Button>
            <Radio.Button value="d">Discover</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Select" hasFeedback>
          {getFieldDecorator("select", {
            rules: [
              { required: true, message: "Please select your payment type!" }
            ]
          })(
            <Select placeholder="Please select your payment tpe">
              <Option value="MasterCard">MasterCard</Option>
              <Option value="Visa">Visa</Option>
              <Option value="American Express">American Express</Option>
              <Option value="Discover">Discover</Option>
            </Select>
          )}
        </Form.Item>
          */}
        <Form.Item label="Amount Payable">
          {getFieldDecorator("amount", {
            rules: [
              {
                required: true,
                message: "Please input the name on your card"
              }
            ]
          })(<Amount/>)}
        </Form.Item>
        <Form.Item label="Name On Card">
          {getFieldDecorator("name_on_card", {
            rules: [
              {
                required: true,
                message: "Please input the name on your card"
              }
            ]
          })(<Input style={{ width: 400}}/>)}
        </Form.Item>
        <Form.Item label="Card Number" >
          {getFieldDecorator("card", {
            rules: [
              {
                required: true,
                message: "Please input your card number!"
              }
            ]
          })(
            <CreditCard />
          )}
        </Form.Item>
        <Form.Item label="CVV">
        {getFieldDecorator("cvv", {
            rules: [
              {
                required: true,
                message: "Please input your security number!"
              }
            ]
          })(
            <NumericInput 
            style={{ width: 120}}
            value={this.state.value}
            onChange={this.onChange}
            which ={4} 
          />
          )}
          
        </Form.Item>
        <Form.Item label="Biling Address 1">
          {getFieldDecorator("address1", {
            rules: [
              {
                required: true,
                message: "Please input your billing address!"
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Biling Address 2">
          {getFieldDecorator("address2", {})(<Input />)}
        </Form.Item>
        <Form.Item label="Country">
          {getFieldDecorator("country", {
            rules: [
              {
                required: true,
                message: "Please input your country!"
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Zipcode">
          {getFieldDecorator("zipcode", {
            rules: [
              {
                required: true,
                message: "Please input your zipcode!"
              }
            ]
          })(<NumericInput 
            style={{ width: 120}}
            value={this.state.value}
            onChange={this.onChange}
            which ={10} 
          />)}
        </Form.Item>

        <Form.Item label="E-mail">
          {getFieldDecorator("email", {
            rules: [
              {
                type: "email",
                message: "The input is not valid E-mail!"
              },
              {
                required: true,
                message: "Please input your E-mail!"
              }
            ]
          })(<Input />)}
        </Form.Item>
        {/* <Form.Item label="Password" hasFeedback>
          {getFieldDecorator("password", {
            rules: [
              {
                required: true,
                message: "Please input your password!"
              },
              {
                validator: this.validateToNextPassword
              }
            ]
          })(<Input.Password />)}
        </Form.Item>
        <Form.Item label="Confirm Password" hasFeedback>
          {getFieldDecorator("confirm", {
            rules: [
              {
                required: true,
                message: "Please confirm your password!"
              },
              {
                validator: this.compareToFirstPassword
              }
            ]
          })(<Input.Password onBlur={this.handleConfirmBlur} />)}
        </Form.Item> 
        <Form.Item
          label={
            <span>
              Nickname&nbsp;
              <Tooltip title="What do you want others to call you?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator("nickname", {
            rules: [
              {
                required: true,
                message: "Please input your nickname!",
                whitespace: true
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Habitual Residence">
          {getFieldDecorator("residence", {
            initialValue: ["zhejiang", "hangzhou", "xihu"],
            rules: [
              {
                type: "array",
                required: true,
                message: "Please select your habitual residence!"
              }
            ]
          })(<Cascader options={residences} />)}
        </Form.Item>*/}
        <Form.Item
          label="Captcha"
        >
          {getFieldDecorator("captcha", {
                rules: [
                  {
                    required: true, 
                    message: "We must make sure that your are a human."
                  }
                ]
              })(<Security
                onloadCallback={this.onLoadRecaptcha}
                verifyCallback={this.verifyCallback}/>)}
          
        </Form.Item>
        <Form.Item label="Phone Number">
          {getFieldDecorator("phone", {
            rules: [
              { required: true, message: "Please input your phone number!" }
            ]
          })(<Input addonBefore={prefixSelector} style={{ width: "100%" }} />)}
        </Form.Item>
        <Form.Item label="Phone Number">
          {getFieldDecorator("phoneNew", {
            rules: [
              { required: true, message: "Please input your phone number!" }
            ]
          })(<PhoneNumber  />)}
        </Form.Item>
        {/*
        <Form.Item {...tailFormItemLayout}>
          {getFieldDecorator("agreement", {
            valuePropName: "checked"
          })(
            <Checkbox>
              I have read the <a href="www.google.com">agreement</a>
            </Checkbox>
          )}
        </Form.Item>
          */}
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Pay
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: "register" })(
  RegistrationForm
);

ReactDOM.render(
  <div>
    <Layout>
      <Header>Welcome</Header>
      <Content>
        <WrappedRegistrationForm />
      </Content>
      <Footer>Thank You</Footer>
    </Layout>
    
  </div>,

  document.getElementById("container")
);
