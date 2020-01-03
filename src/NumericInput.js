import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import {
    Input,
    Tooltip,
  } from "antd";

export default class NumericInput extends React.Component {
  onChange = e => {
    const { value } = e.target;
    const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
    if ((!isNaN(value) && reg.test(value)) || value === "" || value === "-") {
      this.props.onChange(value);
    }
  };

  // '.' at the end or only '-' in the input box.
  onBlur = () => {
    const { value, onBlur, onChange } = this.props;
    if (value.charAt(value.length - 1) === "." || value === "-") {
      onChange(value.slice(0, -1));
    }
    if (onBlur) {
      onBlur();
    }
  };
  render() {
    const x = this.props.which;
    return (
      <Tooltip
        trigger={["focus"]}
        placement="topLeft"
        overlayClassName="numeric-input"
      >
        <Input
          {...this.props}
          onChange={this.onChange}
          onBlur={this.onBlur}
          maxLength={x}
        />
      </Tooltip>
    );
  }
}