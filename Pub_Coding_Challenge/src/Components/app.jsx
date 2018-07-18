import React from 'react';
import $ from 'jquery';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      state: ''
    }
  }

  getData() {
    console.log('making requests')
   $.ajax({
        url: '/data', 
        success: (data) => {
          console.log('response: ', data);
        },
        error: (err) => {
          console.log('err', err);
        }
    });
  }


  render () {
    return (
        <div>
          <h1> Coding Challenge </h1>
          <button onClick={this.getData}> HTTP Request </button>
        </div>
    )
  }
}


export default App;

