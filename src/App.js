import axios from 'axios';
import React, { Component } from 'react';
import './App.css';

class App extends Component {

componentDidMount(){

  

  // fetch('https://jsonplaceholder.typicode.com/posts')
  // .then(response => response.json())
  // .then(data => console.log(data));



  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => console.log(response.data))
  .then(data => console.log(data));


}




  render(){

    return (
      <div>
        
      </div>
    );


  }
  
}

export default App;
