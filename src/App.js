import axios from 'axios';
import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    dishes: null,
    errorMess: null
  }

componentDidMount(){

  console.log("ComponentDidMount:" , this.state);

  // fetch('https://jsonplaceholder.typicode.com/posts')
  // .then(response => response.json())
  // .then(data => console.log(data));
  

// axios.get('http://localhost:3001/dishes')
//   .then(response => response.data)
//   .then(data => {

//     this.setState({

//       dishes: data
//     })

//   })
  
// .catch(error => {
//     this.setState({
//       errorMess: error.message
//     })

//   });

  // axios.post('http://localhost:3001/dishes' , {name: "kacchi" , price: "425"})
  // .then(response => console.log(response));

  // axios.put('http://localhost:3001/dishes/4' , {name: "Biriyani" , price: "300"})
  // .then(response => console.log(response));

  axios.delete('http://localhost:3001/dishes/3')
  .then(response => console.log(response))
  .catch(error => {
    this.setState({
      errorMess: error.message
    })

  });

} 

componentDidUpdate(){

  console.log("Update :" , this.state);
  
}


render(){

    return (
      <div>
        
      </div>
    );


  }
  
}

export default App;
