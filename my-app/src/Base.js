import React from 'react';
import App from './App'
export default class Base extends React.Component {

  constructor(props) {
    super(props);
  }

  

  render() {{console.log(window.location.pathname)}
    return (
        
        <App/>
    )
}
}
