import axios from 'axios';
import React, { Component } from 'react';
import './App.css';

class App extends Component {

componentDidMount(){

  

  // fetch('https://jsonplaceholder.typicode.com/posts')
  // .then(response => response.json())
  // .then(data => console.log(data));
  

  // axios.get('http://localhost:3001/dishes')
  // .then(response => console.log(response.data))
  // .then(data => console.log(data))
  // .catch(error => console.log(error.message));

  // axios.post('http://localhost:3001/dishes' , {name: "kacchi" , price: "425"})
  // .then(response => console.log(response));

  // axios.put('http://localhost:3001/dishes/4' , {name: "Biriyani" , price: "300"})
  // .then(response => console.log(response));

  axios.delete('http://localhost:3001/dishes/3')
  .then(response => console.log(response));




  }  

render(){

    return (
      <div>
        
      </div>
    );


  }
  
}

export default App;
